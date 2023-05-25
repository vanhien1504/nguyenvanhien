var callApi = new CallApi()
var validation = new Validation()
const host = "https://provinces.open-api.vn/api/";
var cart = JSON.parse(localStorage.getItem("Product"))
const formatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})
/**
 *  Call province and distrist
 * 
 * 
 */
const callProvinces = async (api) => {
  try {
    const url = api;
    const res = await fetch(url);
    const data = await res.json();
    getData(data, "province");
  } catch (err) {
    console.error(err);
  }
};
callProvinces("https://provinces.open-api.vn/api/?depth=1");

const getData = (data, select) => {
  let row = '<option disable value="">Chọn</option>';
  data.forEach((item) => {
    row += `<option value="${item.code}">${item.name}</option>`;
  });
  document.querySelector("#" + select).innerHTML = row;
};

const getDataDistrict = async (api) => {
  try {
    const url = api;
    const res = await fetch(url);
    const data = await res.json();
    getData(data.districts, "district");
  } catch (err) {
    console.error(err);
  }
};

var province = document.getElementById("province");
province.addEventListener("change", function () {
  console.log(province.value);
  getDataDistrict(`${host}p/${province.value}?depth=2`);
});

// conver

function renDerProduct() {
  let tt = 0
  var renderCart = document.getElementById("renderProdBy")
  var result = cart.map((item) => {
    tt += item.price * item.quantily
    return `
        <tr>
        <td class="image"><img src="./img/${item.img}" alt=""></td>
        <td class="content">
        <b>${item.name}</b>
        <p>Khu vực: Khu vực Miền Bắc</p>
        <p>Hình thức: Mua hàng</p>
        <p>Loại hàng: ${item.brand}</p>
        <span><a href="#">Sửa</a></span>
        </td>
        <td class="price"><b>${formatter.format(item.price)}</b></td>
        <td class="quantily">
        
        <div class="gr1">
            <input type="text" value="${item.quantily}" id="qtyCard">
            <div class="btn__up">
                <i class="fa-solid fa-sort-up" onclick="upArrow(${item.id},${item.quantily})"></i>
                <i class="fa-solid fa-caret-down" onclick="downArrorw(${item.id},${item.quantily})"></i>
            </div>
        </div>
        
        </td>
        <td class="price"><b>${formatter.format(item.price * item.quantily)}</b></td>
        <td class="remove"><i class="fa-regular fa-trash-can" onclick="removeItemCart(${item.id})"></i></td>
        </tr>
        `
  })
  sumBill(tt)
  localStorage.setItem("Product", JSON.stringify(cart))
  renderCart.innerHTML = result.join('')
}
renDerProduct()

function removeItemCart(id) {
  cart = cart.filter((e) => e.id !== id);
  renDerProduct()
  window.location = "./cart.html"
}
function upArrow(id, qty) {
  if (qty < 20) {

    cart.forEach(element => {
      if (element.id === id) element.quantily = qty + 1

    });
    renDerProduct()

  }
}
function downArrorw(id, qty) {
  if (qty > 1) {

    cart.forEach(element => {
      if (element.id === id) element.quantily = qty - 1

    });
    renDerProduct()

  }
}
function sumBill(sum) {
  let sumBill = 0
  if (sum) {
    sumBill = sum
  }
  document.getElementById("sum0").innerHTML = formatter.format(sumBill)
  document.getElementById("sum1").innerHTML = formatter.format(sumBill)
 


}
/*
validation
*/
function checkForm(){
  let billUser = []

  let nameUser = document.getElementById("nameUser").value
  let phoneUser = document.getElementById("phoneUser").value
  let email = document.getElementById("email").value
  let province = document.querySelector("#province option:checked")
  let district = document.querySelector("#district option:checked")
  let addpress = `${district?.innerHTML},${province?.innerHTML}`
  console.log(province.innerHTML);
  console.log(district.innerHTML);
  const data = new Date()
  let second = data.getSeconds()
  let minutes = data.getMinutes()
  let time = data.getHours()
  let day = data.getDate()
  let month = data.getMonth() + 1
  let year = data.getFullYear()
  let currentDate = `${day}-${month}-${year} ,${time}:${minutes}:${second}s`
  
  let isVali = true
  isVali &= 
  validation.emptyCheck(nameUser,"tbName","(*) Vui lòng không được để trống")
  isVali &= 
  validation.emptyCheck(phoneUser,"tbPhone","(*) Vui lòng không được để trống")
  isVali &= 
  validation.emptyCheck(email,"tbEmail","(*) Vui lòng không được để trống")
  isVali &= 
  validation.emptyCheckProvince(province.innerHTML,"tbprovince","(*) Chọn tỉnh, thành phố")
  isVali &= 
  validation.emptyCheckProvince(district.innerHTML,"tbditris","(*) Chọn quận, huyện ")
  if(!isVali) return null 
  // push user
  billUser.push({ nameUser, addpress, email, phoneUser, currentDate })
  return postServer(billUser)
}
// post server
function postServer(billUser) {
 
  let billItem = []

  console.log(billUser);
  callApi.postBillUser(billUser)
    .then(function () {
    })
    .catch(function (error) {
      console.log(error);
    })

  // pussh item
  let qty, total = 0
  cart.forEach(e => {

    qty += e.quantily
    total += e.price * e.quantily
  })
  billItem.push(cart, total)
  callApi.postBillItem(billItem)
    .then(function () {
      localStorage.clear()
      window.location = "./bill.html"
    })
  
}


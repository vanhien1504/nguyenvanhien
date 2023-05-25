var callApi = new CallApi()
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})
var btn = document.getElementById("addToCart");

var quantily = 1;
const urlSearch = window.location.search;
const id = urlSearch.substring(urlSearch.lastIndexOf("=") + 1) || 1;

renderProduct(id)
function renderProduct(id) {
    callApi.getProductById(id)
        .then(function (result) {

            const product = result.data
            renDerSlide(product)
            document.getElementById("titleProduct").innerHTML = product.name
            document.getElementById("priceDel").innerHTML = formatter.format(product.priceDel)
            document.getElementById("priceIns").innerHTML = formatter.format(product.priceIns)



            function renDerBtn() {
                let a = `
            <a href="./cart.html"><input class="submit" type="submit" value="MUA NGAY"></a>
            <button class="mua-tra-gop" onclick="addtoCart(${product.id},'${product.name}',${product.priceIns},'${product.img}','${product.brand}',${quantily})"><i class="fa-regular fa-credit-card"></i> THÊM VÀO GIỎ HÀNG</button>
            `
                btn.innerHTML = a
            }
            renDerBtn()
            // check quantily
            document.getElementById("qty").addEventListener("click", function () {
                getQti()
            })
            function getQti() {
                quantily = document.querySelector("#qty").value;
                if (quantily < 0) {
                    quantily = 1;
                }
                renDerBtn()
            }
        })
        .catch(function (errr) {
            console.log(errr);
        })
}
function addtoCart(id, name, price, img, brand, quantily) {
    var cart = JSON.parse(localStorage.getItem("Product"))
    
    if (cart == null) {
        cart = []
        cart.push({ id, name, price, img, brand, quantily })
    } else {
        let item = cart.find(
            (item) => item.id == id 
        )
        console.log(id);
        console.log(item);
        if ( item ) {
            item.quantily++
        } else {
            cart.push({ id, name, price, img, brand, quantily })
          
        }
    }
   
    localStorage.setItem("Product", JSON.stringify(cart))
    window.location = "./cart.html"
}
function renDerSlide(data) {
    var getImage =
        `
    <div>
        <img src="./img/${data.img}" alt="">
    </div>
    `
    var getImageNav =
        `
    <div>
        <img src="./img/${data.img}" alt="">
    </div>
    `
    document.getElementById("renSliderFor").innerHTML = getImage
    document.getElementById("renSliderNav").innerHTML = getImageNav
}


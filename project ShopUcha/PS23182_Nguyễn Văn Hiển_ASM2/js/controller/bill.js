var callApi = new CallApi()
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})
function fecthListBill() {
    callApi.getBillUser()
        .then(function (result) {
            console.log(result.data);
            renDerBillUser(result.data);
        })
    callApi.getBillItem()
        .then(function (resule) {
            renDerBillItem(resule.data);
            sumBill(resule.data)
        })
}
fecthListBill()
function renDerBillUser(data) {
   
    let renDer = []
    renDer.push(`
        <div class="box_infomation">
            <p>Mã đơn hàng:</p>
            <span><b>#${data[0].id}</b></span>
        </div>
        <div class="box_infomation">
            <p>Ngày đặt hàng:</p>
            <span><b>${data[0][0].currentDate}</b></span>
        </div>
        <div class="box_infomation">
            <p>Tình trạng:</p>
            <span><b class="status_bill">Đang tiếp nhận xử lý</b></span>
        </div>
        <div class="box_infomation">
            <p>Tên khách hàng:</p>
            <span><b>${data[0][0].nameUser}</b></span>
        </div>
        <div class="box_infomation">
            <p>Số điện thoại:</p>
            <span><b>${data[0][0].phoneUser}</b></span>
        </div>
        <div class="box_infomation">
            <p>Email:</p>
            <span><b>${data[0][0].email}</b></span>
        </div>
        <div class="box_infomation">
            <p>Địa chỉ:</p>
            <span><b>${data[0][0].addpress}</b></span>
        </div>
    `)
    document.getElementById("renDerUser").innerHTML = renDer
}
function renDerBillItem(data) {
    let renDerItem = []
    console.log(data[0][0]);
    data[0][0].forEach(item => {
       
        renDerItem.push(`
                <div class="box_buy_product">
                    <h4>${item.name}</h4>
                    <div class="group_1">
                        <div class="box_buy_prod">
                            <p>Khu vực: Khu vực miền Bắc</p>
                            <p>Hình thức: Mua thẳng</p>
                            <p>Loại hàng: ${item.brand}</p>
                        </div>
                        <div class="box_buy_prod">
                            <span><b>SL: ${item.quantily}</b></span>
                        </div>
                    </div>
                </div>
        `)
    });
    document.getElementById("renderBillItem").innerHTML = renDerItem.join('')
}
function sumBill(data){
    let tt = 0
    data[0][0].forEach(item => {
        tt += item.price * item.quantily
    });

    document.getElementById("renDerSum").innerHTML = formatter.format(tt)
}
function deleteUserAndItem(){
    callApi.deleteItem(1)
        .then(function () {
            fecthListBill()
        })
    callApi.deleteUser(1)
        .then(function () {
            fecthListBill()
            setTimeout(window.location = "./bill.html",2000)
        })
    console.log("hello");
    
}
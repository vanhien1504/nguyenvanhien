function CallApi(){
    this.fetchListDataProducts = function(){
        return axios({
            url: "https://63df71bb59bccf35dab365a1.mockapi.io/api/dung/products",
            method: "GET"
        })
    }
    this.getNavMenu = function () {
        return axios({
            url: "https://63df71bb59bccf35dab365a1.mockapi.io/api/dung/menu",
            method: "GET"
        });
    }
    this.getProductById = function(id){
        return axios({
            url: "https://63df71bb59bccf35dab365a1.mockapi.io/api/dung/products/" +id,
            method: "GET"
        })
    }
    this.postBillUser = function (order){
        return axios ({
            url: "https://63ebb37f32a081172390753d.mockapi.io/order/order",
            method: "POST",
            data: order
        })
    }
    this.postBillItem = function (bill_item1){
        return axios ({
            url: "https://63ebb37f32a081172390753d.mockapi.io/order/bill_item",
            method: "POST",
            data: bill_item1
        })
    }
    this.getBillUser = function(){
        return axios({
            url: "https://63ebb37f32a081172390753d.mockapi.io/order/order",
            method: "GET"
        })
    }
    this.getBillItem = function(){
        return axios({
            url: "https://63ebb37f32a081172390753d.mockapi.io/order/bill_item" ,
            method: "GET"
        })
    }
    this.deleteUser = function (id) {
        return axios({
            url: "https://63ebb37f32a081172390753d.mockapi.io/order/order/" + id,
            method: "DELETE"
        })
    }
    this.deleteItem = function (id) {
        return axios({
            url: "https://63ebb37f32a081172390753d.mockapi.io/order/bill_item/" + id,
            method: "DELETE"
        })
    }
}
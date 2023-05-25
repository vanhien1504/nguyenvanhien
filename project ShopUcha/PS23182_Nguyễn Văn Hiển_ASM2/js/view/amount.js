function count(){
    let cart = JSON.parse(localStorage.getItem("Product"))
    let qty = 0
    if(cart){
        cart.forEach(element => {
            qty += element.quantily
            console.log(qty);
        });
    }
    document.getElementById("amount").innerHTML = qty
}
count()
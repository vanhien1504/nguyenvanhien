var callApi = new CallApi()
function getSlec(id){
    return document.querySelector(id)
}
console.log("heloo");
function getListNav() {
    var promise1 = callApi.getNavMenu()
    promise1
        .then(function (result) {
            renDerNav(result.data);
        })
}
getListNav()
function renDerNav(data) {
    let loadMenuShopUcha = data.map((item) => {
        if (typeof item.menuNav != 'undefined') {

            let loadMenu0 = []
            for (let item0 of item.menuNav)
                loadMenu0.push(`
                <li><a href="${item0.link}">${item0.nameTile}</a></li>
                `)

            return `
                <li><a href="${item.link}">${item.nameTile}</a>
                <ul>
                    ${loadMenu0.join('')}
                </ul>
                </li>
            `
        } else {
            return `<li><a href="${item.link}">${item.nameTile}</a></li>`
        }
    })

    getSlec("#loadMenu").innerHTML = loadMenuShopUcha.join('')

    // lỗi xuất ảnh
    // let loadBannerShopUcha = banner.map((item)=>{
    //     console.log(item.id);
    //     if(item.id === 1){
    //         return `
    //         <div class="owl-item active"  style="width: 1688px;"><a href="#"><img src="./image-mua-tet/${item.img}" alt=""></a></div>
    //         `
    //     }else{
    //         return `
    //         <div class="owl-item"  style="width: 1688px;"><a href="#"><img src="./image-mua-tet/${item.img}" alt=""></a></div>
    //         `
    //     }
    // })

    // getSlec("#loadBanner").innerHTML = loadBannerShopUcha.join('')

}





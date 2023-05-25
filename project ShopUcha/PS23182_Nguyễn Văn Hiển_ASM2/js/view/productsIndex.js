var callApi = new CallApi()
getListProduct()
function getListProduct() {
    var promise = callApi.fetchListDataProducts()
    promise
        .then(function (result) {
            renDerData(result.data)
        })
}
function renDerData(products) {
    var loaderIP = document.querySelector("#loaderProductIP")
    var loaderIpad = document.querySelector("#loaderiPpad")
    var loaderMac = document.querySelector("#loaderMac")
    var loaderAirPods = document.querySelector("#loaderAirPods")
    var loaderAppleW = document.querySelector("#loaderAppleW")
    var loaderPhuKien = document.querySelector("#loaderPhuKien")
    var loaderService = document.querySelector("#laoderService")


    var loadIP = []
    var loadIpad = []
    var loadMac = []
    var loadAirPods = []
    var loadAppleW = []
    var loadPhuKien = []
    var loadService = []

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    })


    products.forEach((item, i) => {

        if (item.brand == "iPhone" && i <= 3) {
            loadIP.push(`
                            <div class="box-element-sanpham-1">
                                    <div class="tet"><img class="img_tet" src="./img/product_tet/${item.iconTet}" alt=""></div>
                                    <div class="pictures"><a href="./detail.html?id=${item.id}"><img src="./img/product_tet/${item.img}" alt=""></a></div>
                                    <div class="title-sanpham">
                                        <p>${item.name}</p>
                                    </div>
                                    <div class="price-sanpham">
                                    <ins>
                                        <span class="price-amount">${formatter.format(item.priceIns)}</span>
                                    </ins>
                                    </div>
                                </div>
                            `)
        }
        if (item.brand === "iPad" && item.role == 1) {
            loadIpad.push(`
                            <div class="box-element-sanpham-1">
                                    <div class="pictures"><a href="./detail.html?id=${item.id}"><img src="./img/${item.img}" alt=""></a></div>
                                    <div class="title-sanpham">
                                        <p>${item.name}</p>
                                    </div>
                                    <div class="price-sanpham">
                                    <ins>
                                        <span class="price-amount">${formatter.format(item.priceIns)}</span>
                                    </ins>
                                    </div>
                                </div>
                            `)
        }
        if (item.brand === "MacBook" && item.role == 1) {
            loadMac.push(`
                            <div class="box-element-sanpham-1">
                                    <div class="pictures"><a href="./detail.html?id=${item.id}"><img src="./img/${item.img}" alt=""></a></div>
                                    <div class="title-sanpham">
                                        <p>${item.name}</p>
                                    </div>
                                    <div class="price-sanpham">
                                    <ins>
                                        <span class="price-amount">${formatter.format(item.priceIns)}</span>
                                    </ins>
                                    </div>
                                </div>
                            `)
        }
        if (item.brand === "AirPods" && item.role == 1) {
            loadAirPods.push(`
                                <div class="box-element-sanpham-1">
                                <div class="pictures"><a href="./detail.html?id=${item.id}"><img src="./img/${item.img}" alt=""></a></div>
                                <div class="title-sanpham">
                                    <p>${item.name}</p>
                                </div>
                                <div class="price-sanpham">
                                <del>
                                    <span class="price-amount">${formatter.format(item.priceDel)}</span> 
                                </del>
                                <ins>
                                    <span class="price-amount">${formatter.format(item.priceIns)}</span>
                                </ins>
                            </div>
                                </div>
                            </div>
                            `)
        }
        if (item.brand === "Watch" && item.role == 1) {
            loadAppleW.push(`
                                <div class="box-element-sanpham-1">
                                <div class="pictures"><a href="./detail.html?id=${item.id}"><img src="./img/${item.img}" alt=""></a></div>
                                <div class="title-sanpham">
                                    <p>${item.name}</p>
                                </div>
                                <div class="price-sanpham">
                                <ins>
                                    <span class="price-amount">${formatter.format(item.priceIns)}</span>
                                </ins>
                                </div>
                            </div>
                            `)
        }
        if (item.brand === "Phụ kiện chính hãng" && item.role == 1) {
            loadPhuKien.push(`
                                <div class="box-element-sanpham-1">
                                <div class="pictures"><a href="./detail.html?id=${item.id}"><img src="./img/${item.img}" alt=""></a></div>
                                <div class="title-sanpham">
                                    <p>${item.name}</p>
                                </div>
                                <div class="price-sanpham">
                                <del>
                                    <span class="price-amount">${formatter.format(item.priceDel)}</span> 
                                </del>
                                <ins>
                                    <span class="price-amount">${formatter.format(item.priceIns)}</span>
                                </ins>
                            </div>
                                </div>
                            </div>
                            `)
        }
        if (item.brand === "Dịch vụ" && item.role == 1) {
            loadService.push(`
                                <div class="box-element-sanpham-1">
                                <div class="pictures"><a href="./detail.html?id=${item.id}"><img src="./img/${item.img}" alt=""></a></div>
                                <div class="title-sanpham">
                                    <p>${item.name}</p>
                                </div>
                                <div class="price-sanpham">
                                <ins>
                                    <span class="price-amount">${formatter.format(item.priceIns)}</span>
                                </ins>
                                </div>
                            </div>
                            `)
        }

    });
    loaderIP.innerHTML = loadIP.join('')
    loaderIpad.innerHTML = loadIpad.join('')
    loaderMac.innerHTML = loadMac.join('')
    loaderAirPods.innerHTML = loadAirPods.join('')
    loaderAppleW.innerHTML = loadAppleW.join('')
    loaderPhuKien.innerHTML = loadPhuKien.join('')
    loaderService.innerHTML = loadService.join('')

}
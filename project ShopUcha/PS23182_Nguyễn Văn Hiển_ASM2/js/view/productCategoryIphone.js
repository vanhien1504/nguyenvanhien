var callApi = new CallApi()
getListProduct()
function getListProduct() {
    var promise = callApi.fetchListDataProducts()
    promise
        .then(function (result) {
            renDerCategory(result.data)
        })
}
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})
function renDerCategory(products) {
    var loaderCategoryIphone = document.querySelector("#loaderCategoryIphone")

    var loadCategoryIphone = []
    products.forEach((item, i) => {

        if (item.brand === "iPhone" && item.iconTet == "") {
            loadCategoryIphone.push(`
                                <div class="box-element-sanpham-1">
                                <div class="tet"><img class="img_tet" src="./img/product_tet/${item.iconTet}" alt=""></div>
                                <div class="pictures"><a href="./detail.html?id=${item.id}"><img src="./img/product_tet/${item.img}" alt=""></a></div>
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
                            `)
        } else if (item.brand === "iPhone" && item.iconTet == "tet-2023.png") {
            loadCategoryIphone.push(`
                                <div class="box-element-sanpham-1">
                                <div class="tet"><img class="img_tet" src="./img/product_tet/${item.iconTet}" alt=""></div>
                                <div class="pictures"><a href="./detail.html?id=${item.id}"><img src="./img/product_tet/${item.img}" alt=""></a></div>
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
                            `)

        }
    })
    loaderCategoryIphone.innerHTML = loadCategoryIphone.join('')
}
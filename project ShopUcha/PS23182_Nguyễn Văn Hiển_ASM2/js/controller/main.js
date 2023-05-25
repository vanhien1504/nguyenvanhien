var callApi = new CallApi()

load()
function load() {
    document.getElementById("loader").style.display = "block"
    document.getElementById("setTimeOut").style.display = "none"
    var promise = callApi.fetchListDataProducts()
    promise
        .then(function () {
            document.getElementById("loader").style.display = "none"
            document.getElementById("setTimeOut").style.display = "block"
        })
}


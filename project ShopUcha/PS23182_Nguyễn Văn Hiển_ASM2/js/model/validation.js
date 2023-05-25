function Validation() {
    this.emptyCheck = function (value, divId, mess) {
        if (value === "") {
            document.getElementById(divId).style.display = "block"
            document.getElementById(divId).style.color = "red"
            document.getElementById(divId).innerHTML = mess
            return false
        }
        document.getElementById(divId).style.display = "none"
        document.getElementById(divId).innerHTML = ""
        return true
    }
    this.emptyCheckProvince = function (value, divId, mess) {
        if (value === "Chọn") {
            document.getElementById(divId).style.display = "block"
            document.getElementById(divId).style.color = "red"
            document.getElementById(divId).innerHTML = mess
            return false
        }
        document.getElementById(divId).style.display = "none"
        document.getElementById(divId).innerHTML = ""
        return true
    }
    
}

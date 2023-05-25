import { addProFile,getProfile } from "../controller/footerIm.js";
var e = {
    name: "Nguyễn Văn Hiển"
}
addProFile(e)
var renDer = getProfile()
document.getElementById("boxTk").innerHTML = renDer[0].name
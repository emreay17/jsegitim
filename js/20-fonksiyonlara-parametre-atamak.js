// --- fonksiyonlar bir veya daha fazla parametre alabilir ve ya hiç almayabilir
//----- Bir fonksiyon dısarı bilgi gonderebilir(return) veya gondermeyebilir.
// Mümkünse fonksiyonun bagımlılıklarını azaltmak gerekir.

let firstName = " Emre"
let lastName = " AY"

function title(firstName="",lastName=""){
    // console.log(`Merhaba ${firstName ? firstName : ""}${lastName ? lastName : ""}`);
    console.log(`Merhaba ${firstName} ${lastName}`)
}
console.log(firstName)
title()
title("parametre")


let name = " Emre"
let surName = " AY"
function title2(firstName, lastName) {
let info = `Merhaba ${name} ${surName}`
return info;}


let titleInfo = title2("Ad", "Soyad")
console.log(titleInfo)

function domIdWriteInfo(id, info){
    let domObject = querySelector(`#${id}`)
    domObject.innerHTML = info
}
let htmlInfo = `<span style ="color:red> Rengi Kırmızı</span>`

domIdWriteInfo('title', htmlInfo)
domIdWriteInfo('info', title2("lorem", "Ipsum"))


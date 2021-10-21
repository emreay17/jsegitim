// --- fonksiyonlar bir veya daha fazla parametre alabilir ve ya hiç almayabilir
//----- Bir fonksiyon dısarı bilgi gonderebilir(return) veya gondermeyebilir.
// Mümkünse fonksiyonun bagımlılıklarını azaltmak gerekir.

let firstName = " Emre"
let lastName = " AY"

function title(firstName="",lastName=""){
    console.log(`Merhaba ${firstName ? firstName : ""}${lastName ? lastName : ""}`)
}
title()


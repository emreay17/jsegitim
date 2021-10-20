// coklu kosullarda calismak

let userName = prompt("Kullanici Adinizi Giriniz...")
let age = prompt ("Lutfen yasinizi giriniz...")
let bilgi = document.querySelector("#bilgi")

if(userName && age >=18){
    bilgi.innerHTML = "Ehliyet alabilirsiniz"
}else if(!userName){
    bilgi.innerHTML = "Kullanici adinizi girmelisiniz...!!!"
}else if(!(age >= 18)){
    bilgi.innerHTML = "Yas Bilginiz yok veya 18 yasindan kucuksunuz"
}
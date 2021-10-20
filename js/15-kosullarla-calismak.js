let userName = prompt("kullanıcı adınızı giriniz")
// eğer kullanıcı bilgisi varsa ekrana ismini yazdır.bilgi yoksa bilgi yok yazdır.

if (userName.length >0){
    console.log(userName)
}else{
    console.log("Bilgi yok")
}
if (userName.length >0){
    console.log(`Kullanıcı Bilginiz: ${userName}`)
}else{
    console.log("Kullanıcı bilginiz bulunamamıştır.")
}
let userName = prompt("Kullannici Bilginizi Yaziniz")
let info = document.querySelector("#bilgi")

//ternany kullanimi :
//kosul ? dogruysa : yanlissa

//userName.length > 0 ? username :"Kullanici Bilginiz Bulunamadi :("

bilgi.innerHTML = `${userName ? userName : "Kullanici bilginiz Bulunamadi :( "}`
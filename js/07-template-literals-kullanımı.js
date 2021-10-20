// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let userName = "Emre"
const DOMAIN = "kodluyoruz.org"

let email = userName + "@" + DOMAIN

// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

let info = `Merhaba ${userName} sitemize Hoşgeldin...
mail adresin: ${email}
mail adresinin uzunlugu: ${email.length}
borcunuz: ${(5*4)+40} TL, 
günün saat bilgisi: ${new Date().getHours()}
kısa isminiz: ${userName[0]+userName[1]} 
`

console.log(info)
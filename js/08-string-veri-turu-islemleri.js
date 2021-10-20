// ********** String Veri Turu Islemleri ********** 
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "emreay@gmail.com"
let firstName = "emre"
let lastName = "AY"

//string karakter sayısı => .length
console.log(email.length) //=> 16 

// İlk karakteri bulmak => [0] ya da .charAt(0)
console.log(firstName[0])
console.log(firstName.charAt(0))

// buyuk harf kücük harf :

firstName = firstName.toUpperCase()
console.log(firstName)

lastName = lastName.toLowerCase()
console.log(lastName)


// string icerisinden aradığımız bilginin yerini bulmak için => .search("")

console.log(email.search("@"))
console.log(email[6])

// belli bir yere kadar almak için => .slice

let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)
// sadece gmail.com kısmını almak için =>
console.log(DOMAIN.slice(0, DOMAIN.indexOf('.') ) ) 

// bilgiyi değiştirmek için => .replace

email = email.replace('gmail.com','kodluyoruz.org')
console.log(email)

// istedigin bilgi olup olmadıgını console a yazarak öğrenebilirsin

email.includes('asdasdsa')//=> false 
email.includes('@')// => true

// istediğin bilgiyle başlayıp bittiğini öğrenmek için => startWith, endWith kullanılır.

console.log(email.endsWith('kodluyoruz.org'))
//=> true

// ilk harflerini büyük harf yapmak 

firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()} ${firstName.slice(1).toLowerCase()},${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)
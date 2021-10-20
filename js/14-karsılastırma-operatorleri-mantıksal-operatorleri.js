// karşılaştırma operatorleri ve mantıksal operatörler

let price = "0"
let user = "emre"

// eşitse  => == 
console.log("== :", price ==1)
console.log("== :", price == 100)// false

// değer ve tür eşit ise => ===
console.log("=== :", price === 1)
console.log("=== :", price === 100) // false

// eşit değilse => !=
console.log(user != "guest") // true

// kücükse => <
console.log("price < 100", price < 100)//true

//kücük ve eşitse   <=
console.log("price =< 100", price <= 100)//true

// büyükse >
console.log("price > 100",price > 100)//false

//büyük veya eşitse >=
console.log("price >= 100",price >= 100)// false

// && ve
price = 0
console.log( price > 0 && user != "guest") // false

// || veya

console.log( price > 0 || user != "guest") // true

// ! değil yani tersi
user = "guest"
price = 1
console.log(price > 0 && !user == "guest") // false

console.log( price > 0 && user == "guest") // true


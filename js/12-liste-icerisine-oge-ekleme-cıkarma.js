// liste icerisindeki son elemana ulaşmak ve ya eleman eklemek =>
let firstChild = document.querySelector("ul#list>li:first-Child")
firstChild.innerHTML = "değiştirildi"

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "sonunda basardık"

let ulDOM = document.querySelector("ul#list")

let liDOM = document.createElement('li')

liDOM.innerHTML = "nasıl olmus ama ?"
ulDOM.append(liDOM) // => en sona ekler

liDOM.innerHTML = "bu sefer en basa mı ?"
ulDOM.prepend(liDOM) // => bu da en basa ekler 
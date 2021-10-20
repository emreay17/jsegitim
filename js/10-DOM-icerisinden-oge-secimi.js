// Document icerisinden öğe secerek işlemek 
let title = document.getElementById('title')
title.innerHTML = "Baslık degisti"
console.log(title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " degisti"
link.style.color = "purple"
link.classList.add('btn')
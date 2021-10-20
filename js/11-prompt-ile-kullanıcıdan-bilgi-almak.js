let fullName = prompt("Lütfen Adınızı yazınız")


let title = document.querySelector("#title")

title.innerHTML = "Merhaba"
title.innerHTML = `${title.innerHTML} <small style="color:purple">${fullName}</small>`
 

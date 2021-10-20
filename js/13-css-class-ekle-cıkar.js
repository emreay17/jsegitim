// css class eleman eklemek ve çıkarmak

let title = document.querySelector("#title")
title.classList.add("text-primary")
title.classList.add("text-align:center","border","border-primary","mt-3")// birden fazla class eklemek için 

title.classList.remove("text-primary")// classları silmek icin 

// class listesini goruntulemek icin 
console.log(title.classList)

title.classList.add("text-primary")// tekrar class eklendi



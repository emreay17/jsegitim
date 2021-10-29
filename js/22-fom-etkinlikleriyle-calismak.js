// DOM Etkinlikleriyle Calismak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events


let title = document.querySelector("#title")
title.addEventListener("click", domClick);

function domClick(){
    console.log("Etkinlik Denetlendi")
    this.style.color =="red"? this.style.color= "black": this.style.color= "red"}


    // fonksiyon yapısı değilse bunu yap böyleyse bunu yap !!!
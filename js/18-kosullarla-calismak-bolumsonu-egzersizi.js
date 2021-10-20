// Kosullarla calismak bölüm sonu egzersizi sınav notları 
// prompt ile bilgiyi alip info id ye yazdıracağız

// AA 90-100
// BA 85-89
// BB 80-84
// CB 75-79
// CC 70-74
// DC 65-69
// DD 60-64
// FD 50-59
// FF 0-49

// kullanıcının girdiği verinin istediğimiz aralıkta olup olmadıgına bakacagız ff e üzgün surat diğerlerine gülücük koyacagız.FF text-danger digerleri text-primary olacak 

const smile =`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
const frown = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

let puanBilgisi = prompt ("Puanı Giriniz...")
let textBilgi;
let bilgi = document.querySelector("#bilgi")
if (puanBilgisi >= 0 && puanBilgisi <= 100) {
    textBilgi = smile
    bilgi.classList.add('text-primary')
    if(puanBilgisi >=90){
        textBilgi += " AA"
    } else if(puanBilgisi >= 85){
        textBilgi += " BA"
    } else if(puanBilgisi >= 80){
        textBilgi += " BB"
    } else if(puanBilgisi >= 75){
        textBilgi += " CB"
    } else if(puanBilgisi >= 70){
        textBilgi += " CC"
    } else if(puanBilgisi >= 65){
        textBilgi += " DC"
    } else if(puanBilgisi >= 60){
        textBilgi += " DD"
    } else if(puanBilgisi >= 50){
        textBilgi += " FD"
    } else if(puanBilgisi < 50){
        textBilgi = `${frown} FF`
        bilgi.classList.remove('text-primary')
        bilgi.classList.add('text-danger')
    }       
} else {
    textBilgi = " Bilgiler Dogru Degil..."
}
bilgi.innerHTML = `${textBilgi} -> ${puanBilgisi}`

// fonksiyon tanımlamak icin => function

function helloWorld(){
    console.log("Hello world")
}
function hello(){
    console.log("Merhaba")
    helloworld();
}

function userCheck () {
    if (userName && age >=18){
        bilgi.innerHTML = " ehliyet alabilirsiniz"
    }else if (!userName){
        bilgi.innerHTML = " Kullanıcı adiniz yok"
    }else if (!(age >= 18)){
        bilgi.innerHTML = " Bilginiz yok ya da 18 yasından kücüksünüz"
    }
}
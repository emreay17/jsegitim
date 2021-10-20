// ********** Number Veri Turu ile Calismak ********** 
// number veri turu tanimlamak:

let price = 100
let tax = 0.180
let priceTax = price * tax
let total = price + priceTax

console.log(
    "Fiyat", price,
    "KDV oranı", tax,
    "KDV tutarı", priceTax,
    "toplam" , total
    )

    let stringNumber ="11"
    console.log(stringNumber)

    let newNumber = Number(stringNumber)
    console.log(newNumber)

    console.log("Number icine bilgi gonderildi", Number("121"))

    // arttirma ve azaltma islemleri:

    let counter = 100

    counter = counter + 1; 
    counter += 1;
    counter ++ ;   
    
    console.log(counter)

    counter -= 1 ;
    counter --;
    console.log(counter)

    let sayi = 100
    sayi *=10;
    console.log(sayi)
    
    sayi %= 7;  // onluk sistem gosterimi 7 lik sistemde cıktısı 6 oluyor.
    console.log(sayi)

    console.log( 20 % 3) // çıktısı 3 lük sistemde 2

    //üst alma 

    console.log(5 ** 3) // 5 üzeri 3 çıktısı 125 

    console.log("Asagi Yuvarlama",
            Math.floor(2.2)) // asagi yuvarlama da 2.2 ciktisi => 2

    console.log("Yukarı yuvarlama",
            Math.ceil(2.2)) // Yukarı yuvarlama cıktısı => 3

    console.log("yakına yuvarlama",
            Math.round(2.3)) // cıktısı=> 2
    console.log("Yakına Yuvarlama",
            Math.round(2.7)) // cıktısı => 3


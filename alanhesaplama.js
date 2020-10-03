//Karenin Alanı-Çevresi
function hesapla(){
    var sayi = parseInt(prompt('sayi giriniz'))

   sayi = Number(sayi)
   var alan = sayi*sayi
   var cevre = sayi*4
   alert('kenar alanı : '+alan+' çevresi : '+cevre)
}
console.log(hesapla())


//Üçgenin Alanı
function hesapla(){
    var sayi1 = parseInt(prompt('sayi gir'))
var sayi2 = parseInt(prompt('sayi gir'))

sayi1 = Number(sayi1)
sayi2 = Number(sayi2)

var alan = sayi1*sayi2/2
alert('üçgenin alanı : '+alan)

}
console.log(hesapla())


function hesapla(){
    var sayi = parseInt(prompt('sayi giriniz'))

   sayi = Number(sayi)
   var alan = sayi*sayi
   var cevre = sayi*4
   alert('kenar alanı : '+alan+' çevresi : '+cevre)
}
console.log(hesapla())

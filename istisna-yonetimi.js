/*
 * throw
 * try
 * catch
 * finally 
 */


 /*  throw yapısı
 var isim="mehmet";
 if(isim!=="ahmet")
     throw Error('beklenmeyen isim');
console.log(isim);
*/

try{
    var sayi=4;
    var sayi1=1;
    var sonuc=sayi/sayi1;
    if(sayi1===0)
        throw Error('sayi1 sıfır olamaz');
    else
        console.log(sonuc);
}
catch(Error){
    console.log(Error);
}
finally{
    console.log("işlem bitti");
}

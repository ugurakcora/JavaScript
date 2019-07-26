// giriş -> fn() -> çıktı

function AdSoyad(Ad,Soyad){
    return Ad+" "+Soyad;
}
console.log(AdSoyad("Uğur","Akçora"));


//değişken olarak fonksiyon oluşturabiliriz
var fonskiyonum =function(){
    console.log("javascript");
};
fonskiyonum();
const degerler={
    deger1:'deger1',
    deger2:'deger2',
    deger3:{
        isim:'uğur'
    }
};
const {deger3: {isim}}=degerler;
console.log(isim);

//burada isim değişkenini name değişkenine de atabiliriz
const {deger3: {isim: name}}=degerler;
console.log(name);
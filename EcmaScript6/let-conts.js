//var yerine let ve conts kullanılır.
/*
var x="değişken";
let y="bu da değişken";
console.log(x);
console.log(y);


for(let i=0;i<10;i++){
    //
}
console.log(i);
*/


/*
var x='foo';
var x="bar";
console.log(x);
*/

//var da iki kere aynı değişkeni kullanıp hatalı işlemler yapabilirsiniz ama let de öyle bir sorun olmaz

/*
let x='foo';
let x="bar";
console.log(x);
*/
//böyle yaptığınız da hata alırsınız.

//Conts değişken değeri ilerde değiştirlmeyecekse kullanılır, değiştirilecekse let kullanılır.
/*
const pi=3;
pi=3,14;
console.log(pi);
*/
//hata verdi

/*
let pi=3;
pi=3.14;
console.log(pi);
*/

//hata vermedi

const degerler=[2,3,4,5];
degerler.push(1);
console.log(degerler);

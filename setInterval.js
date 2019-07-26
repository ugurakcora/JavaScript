//durdurmadıkça belirli aralıklarda çalışmaya devam eder

/*
setInterval(function(){
    console.log("selam");
},1000);

*/


/*  her selam yazdığında bir artacak ve kaç selam yazdığını görüyor olucaz

var sayi=1;
setInterval(function(){
    console.log("selam: "+sayi);
    sayi++;
},1000);

*/

//burada en fazla 5e kadar gelir ve kapanır
var sayi=1;
var interval=setInterval(function(){
    if(sayi==5){
        clearInterval(interval);
    }
    console.log("selam: "+sayi);
        sayi++;
},1000);
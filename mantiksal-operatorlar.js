/*
 * && (ve) iksi de true olursa true döner
 * 
 * || (veya) ikisinden biri true olursa true döner
 */

 console.log(1<4 && 2===2);
 console.log(1<4 && 2==="2");

 console.log(1<4 || 2==="2");
 console.log(1>4 || 2==="2");

 var sayi1=1,
     sayi2=2,
     sayi3=3;
 var durum = (sayi1==1 && sayi2==2 && sayi3==3);
 console.log(durum);
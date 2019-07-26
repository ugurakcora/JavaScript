//bütün elemanları yazdırma
/*
const arr=['foo','bar','xyz'];
console.log(...arr);
*/

const arr=[1,2,3]
const arr2=[...arr,4,5,6];
console.log(...arr2);

//rest operatorü
//arr degeriri bir değişkene atamadığımızda resr opetatörü ile çağırabiliriz.
const ary=['a','b','c','d'];
const[deger1,...rest]=ary;
console.log(rest);
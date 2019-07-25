var dizi=['Uğur',22,false,0.3];
console.log(dizi.length);
console.log(dizi[1]);


///for döngüsüyle ekrana yazdırma
for(i=0;i<dizi.length;i++){
    console.log(dizi[i]);
}

//foreach ile yazdırma
dizi.forEach(function(k){
    console.log(k);
})

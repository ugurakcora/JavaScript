//callbackhell
/*
const asenkronFonksiyon=function(sayi,callback){
    const sonuc=sayi+2;
    callback(sonuc);
};
asenkronFonksiyon(2,function(sonuc){
    console.log(sonuc);
    asenkronFonksiyon(4,function(sonuc){
        console.log(sonuc);
        asenkronFonksiyon(6,function(sonuc){
            console.log(sonuc);
            asenkronFonksiyon(8,function(sonuc){
                console.log(sonuc);
            });
        });
    });
});
*/

/*
const asenkronFonksiyon=()=>{
    return new Promise((resolve,reject)=>{
        resolve('her şey yolunda');
    })
};
asenkronFonksiyon()
    .then((data) =>{
        console.log(data);
        return 1;
    })
    .then ((data)=>{
        console.log(data);
        return 2;
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((Error)=>{
        console.log("bi sorun var karşim");
    });

    */



    ///////////////////////



    
const asenkronFonksiyon=(sayi)=>{
    return new Promise((resolve,reject)=>{
        if (sayi===4)
            resolve("Her şey yolunda");
        else
            reject("bi sorun var abicim");    
    })
};
asenkronFonksiyon(5)
    .then((data) =>{
        console.log(data);
        return 1;
    })
    .then ((data)=>{
        console.log(data);
        return 2;
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((Error)=>{
        console.log(Error);
    });
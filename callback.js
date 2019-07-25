function soyle(text,callback){
    console.log(text);
    callback();
}
function caydemle(){
    console.log("çay demnleniyor..");
};
soyle("merhaba",caydemle);


console.log("///////");

function soyle(text,callback){
    console.log(text);
    callback();
}
var cayDemle=function(){
    console.log("çay demleniyor..");
};
soyle("merhaba",caydemle);

console.log("///////");

function soyle(text,callback){
    console.log(text);
    callback();
}
soyle("merhaba",function(){
    console.log("çay demleniyor..");
});

//belli bir süre sonunda işlem yapar
setTimeout(function() {
    console.log("selam nasılsın1");
}, 5000);

console.log("////");
var fnc=function(){
    console.log("selam nasılsın2");
};
setTimeout(fnc,3000);
function Fn(){
};
Fn.prototype.name='JoyNop';
Fn.prototype.getYear=function(){
    return 1997;
};
var fn=new Fn();
console.log(fn.name);
console.log(fn.getYear());

console.log("---------");



function hello(){
    var a=10;
    alert(hello);
}
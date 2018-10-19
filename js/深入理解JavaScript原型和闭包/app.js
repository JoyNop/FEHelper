function Fn(){
};
Fn.prototype.name='JoyNop';
Fn.prototype.getYear=function(){
    return 1997;
};
var fn=new Fn();
console.log(fn.name);
console.log(fn.getYear());
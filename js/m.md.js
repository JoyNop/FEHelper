/* 1\js原型链
2、封包闭包
3、数据结构
4、排序
5.console.log() 
6.比较大小
7.bootsterap
8.css基本用法



*/

/* var a=123;
var b=function(){
    a+=1;
    return a;

}
console.log(a);
function c(){
   return b+a;
   

} ;
console.log(c);


console.log(this); */


function a() {
    var i = 0;
    function b() {
        alert(++i);
    }
    return b;
} var c = a();

debugger
c();
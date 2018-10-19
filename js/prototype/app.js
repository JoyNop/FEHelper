var fn = function () {
    alert(100);
};
fn.a = 10;
fn.b = function () {
    alert(123);
};
fn.c = { name: 'JoyNop', year: 1997 };
console.log(fn);

console.log('-------------');
console.log(fn.a);
console.log('-------------');

console.log(fn.b);
console.log('-------------');

console.log(fn.c);


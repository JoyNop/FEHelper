/* 场景1

假定有一个对象数组A，获取数组中制定的类型的对象放到B数组中

*/

var products = [
    { name: "cucumber", type: "vegetable" },
    { name: "banana", type: "fruit" },
    { name: "celery", type: "vegetable" },
    { name: "orange", type: "fruit" }
];
//es5
var filteredProducts = [];


for (var i = 0; i < products.length; i++) {
    if (products[i].type === "fruit") {
        filteredProducts.push(products[i]);
    }
}
//console.log(filteredProducts);
//es6
var filtered2 = products.filter(function (product) {
    return product.type == "fruit";
})

console.log(filtered2);


/* 场景2

假定有一个对象数组A，过滤掉不满足条件的对象

条件，蔬菜数量》0，价格《10 */

var products2 = [
    { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
    { name: "banana", type: "fruit", quantity: 10, price: 16 },
    { name: "celery", type: "vegetable", quantity: 30, price: 8 },
    { name: "orange", type: "fruit", quantity: 3, price: 6 }
];
var check = products2.filter(function (product) {
    return product.type === "vegetable" && product.price < 10 && product.quantity > 0
});
console.log(check);
/* 
场景3

假定有两个数组（A,B)根据A中ID的值，过滤掉B不符合数据的元素 */

var post={id:4,title:"JavaScirpt"};

var comments=[
    {postID:4,content:"Angular4"},
    {postID:2,content:"Vue.js" },
    {postID:3,content:"Nodejs"},
    {postID:4,content:"React.js"}
];


function commentsForPost(post,comments){

}

console.log(commentsForPost)
/* 场景1
j就按每個對象数组每个电脑是否可用
大于16位操作系统表示客户用，否则不可好用 */

var computers = [
    { name: "apple", ram: 16 },

    { name: "IBM", ram: 4 },

    { name: "Acer", ram: 32 },

]

var everyComputersCanRunProgram = true;
var someComputersCanRunProgram = false;

for(var i=0;i<computers.length;i++){
    var computer=computers[i];
    if (computer.ram<16){
        everyComputersCanRunProgram=false;

    }
}

console.log(everyComputersCanRunProgram);


//console.log(user);


//es6  find

user = users.find(function (user) {
    return user.name === "Alex";
})

console.log(user);


// 场景2

// 假定有一个对象数组A，根据指定对象的条件，找到数组中很符合调节的对象

var posts = [
    { id: 1, title: "node.js" },
    { id: 2, title: "react.js" }
];

var comment = { postId: 1, content: "hello world" };

function postForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId;
    })
}

console.log(postForComment(posts, comment));
/* 场景1
假定有一个对象数组A，找到复合条件的对象 */

var users = [
    { name: "jill" },
    { name: "Alex" },
    { name: "Bill" }
];

//es5
var user;
for (var i = 0; i < users.length; i++) {
    if (users[i].name === "Alex") {
        user = users[i];
        break;
    }
}
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
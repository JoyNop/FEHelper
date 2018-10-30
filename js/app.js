function Person(){

    Person.prototype.name="JoyNop";
    Person.prototype.age = 17;
    Person.prototype.job = "Software";
    Person.prototype.sayName = function(){
        alert(this.name);
    };

}

var person1 = new Person(); 
var person2 = new Person();

// alert(person1.hasOwnProperty("name"));
// console.log(person1);
// alert("name" in person1);

var friend=new Person();

Person.prototype.sayHi=function(){
    alert("hi");
};

friend.sayHi();
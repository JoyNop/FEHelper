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

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];
    if (computer.ram < 16) {
        everyComputersCanRunProgram = false;

    }
}


// for (var i = 0; i < computers.length; i++) {
     
//     if (computers[i].ram < 16) {
//         everyComputersCanRunProgram = false;

//     }
// }

console.log(everyComputersCanRunProgram);


//functions

//syntax -1 
function sayHello() {
    console.log('Hello')
}
sayHello()
//syntax -2 : function - literals - can be assigned to a variable,can be passed as param or returned from the another function 

//anonmous function 
let hai = function () {
    console.log('Hai')
};
hai();
//args and parameters

let add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(10, 10))
console.log(add())




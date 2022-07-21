//fp principle : pure funcition 

//A.if function receives set of args, it should return the same without any mutation.


//pure function 
function  getMessage(message){
    return message
}

console.log(getMessage('Hello'))

//impure function
function calculate(a) {
    let b = 100;
    // let res = a * 10
    // return res;
    return a * b;
}
console.log(calculate(10))
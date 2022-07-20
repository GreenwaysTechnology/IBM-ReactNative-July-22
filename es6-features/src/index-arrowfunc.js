//arrow functions
let hai = () => {
    console.log('Hai')
};
hai();
//rules for arrow functions 

//if function has only one line of body, we can remove {}
hai = () => console.log('Hai');
hai();
//args and parameters
let add = function (a, b) {
    return a + b
}
console.log(add(10, 10))

//if function has only return statement , remove {} and return statement
add = (a = 0, b = 0) => a + b
console.log(add(10, 10))




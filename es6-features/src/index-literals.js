//literals 
//
//let or const 
//strings : "",'',``,${}

let firstName = "Subramanian";
let lastName = 'Murugan'
console.log(" Name " + firstName + lastName)
console.log(" Name ", firstName, lastName)
//es 6 way of printing
console.log(`Name ${firstName} , ${lastName}`)
//numbers 
let salary = 10000;
console.log(`Salary ${salary}`)
//booleans 
let isValid = true
console.log(`isValid ${isValid}`)
//undefined
let qty;
console.log(`Qty ${qty}`)
//NaN - Not a Number -  Numerical Error
/**
 * 1.if you do computation against undefined
 * 2.if you do typeconversion, if variable is having speacial characters
 */
let totalPrice = qty * 100;
console.log(`Totatal Qty ${totalPrice}`)

//typconversion string to number 
//automatic /implicit conversion
let stock = "10" //string 
let totalStock = stock * 10
console.log(`Total Stock ${totalStock}`)
//using parse functions
totalStock = parseInt(stock) * 10
console.log(`Total Stock ${totalStock}`)
//using unary + operator
totalStock = +stock * 10
console.log(`Total Stock ${totalStock}`)
//using Number function 
//using unary + operator
totalStock = Number(stock) * 10
console.log(`Total Stock ${totalStock}`)
//Nan and Type conversion
stock = "$10"
totalStock = stock * 10
console.log(`Total Stock ${totalStock}`)
//////////////
//infinity 
let avgSalary = 10000 / 0
console.log(`Avg Salary ${avgSalary}`)










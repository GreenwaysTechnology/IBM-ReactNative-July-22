//Advance booleans 
/**
 * in javascript every thing is true except the following values
 * 
 * //falsy values 
 * 1.boolean false 
 * 2.0
 * 3.undefined
 * 4.NaN
 * 5.null false 
 * 6.empty string
 * 
 */
// let salary = 100
let salary = 0

if (salary) {
    console.log('salary is found')
} else {
    console.log('salary not found')
}

//tenary operator
salary ? console.log('salary is found') : console.log('salary not found')
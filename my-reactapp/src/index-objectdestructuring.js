//object destructuring ; breaking object properties 

// function showEmployee(employee) {
//     console.log(`Id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`city ${employee.address.city}`)
// }


// function showEmployee(employee) {
//     //destructuring 
//     const { id, name, address: { city } } = employee
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     // console.log(`city ${address.city}`)
//     console.log(`city ${city}`)

// }
// function showEmployee({ id, name, address: { city } }) {
//     //destructuring 
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     // console.log(`city ${address.city}`)
//     console.log(`city ${city}`)

// }
const showEmployee = ({ id, name, address: { city } }) => {
    //destructuring 
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    // console.log(`city ${address.city}`)
    console.log(`city ${city}`)

}
showEmployee({ id: 1, name: 'subramanian', address: { city: 'coimbatore' } })
////////////////////////////////////////////////////////////////////////////////////

//function which returns object
// const getStockValue = () => {
//     return {
//         symbol: 'google',
//         qty: 100,
//         value: 10000
//     }
// }

// const getStockValue = (symbol = 'google', qty = 100, value = 10000) => {
//     return {
//         symbol: symbol,
//         qty: qty,
//         value: value
//     }
// }
// const getStockValue = (symbol = 'google', qty = 100, value = 10000) => {
//     //leftside:rightside
//     //objectProperty: localvariable
//     //if object property and local variable is same , we can remove : and any variable
//     return {
//         symbol,
//         qty,
//         value
//     }
// }
const getStockValue = (symbol = 'google', qty = 100, value = 10000) => ({
    symbol,
    qty,
    value
})

console.log(getStockValue())
console.log(getStockValue('Meta', 1000, 10000))





















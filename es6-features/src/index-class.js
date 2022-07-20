// es 6 class 

class Customer {
    constructor(id = 0, name = '', city = '') {
        //instance variables
        this.id = id
        this.name = name
        this.city = city
    }
}

//customer is reference variable
//new is keyword
//Cusotomer() - constructor call 
let customer = new Customer(1, 'Subramanian', 'Coimbatore');
console.log(`${customer.id} ${customer.name} ${customer.city}`)

class OrderService {
    constructor() {
    }
    //methods
    findAll() {
        return 'orders'
    }
}
let orderService = new OrderService()
console.log(orderService.findAll())

///////////////////////////////////////////////////////////////////////////////////

//literal pattern 

let product = {
    id: 1,
    name: 'Phone',
    category: {
        type: 'Electronincs'
    }
}



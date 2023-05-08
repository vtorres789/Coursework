// First Part - Initiating Object

const customer = {
    firstName: "jake",
    lastname: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
}

console.log("First Part")
console.log(customer);

// Second Part - Adding Properties

customer['email'] = "Jak3Smith1992@email.com"
customer['phone'] = 3195551234
customer['zipCode'] = "63132"
customer['favoriteFlavors'] = ["coffee", "strawberry", "matcha"]

console.log("Second Part")
console.log(customer);

// Third Part - Removing and Adding Properties

delete customer['zipCode'];
delete customer['favoriteStore'];
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"]
customer.futureFlavors = "mango"
customer.todaysPurchaseCost = 5.32

console.log("Third Part")
console.log(customer);




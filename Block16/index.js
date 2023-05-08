const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

/* 
    Determine if a customer has a subscription
    If they do, apply a 25% discount after the refill total is calculated.
*/

const refillTotal = ({ pricePerRefill, refills }) => pricePerRefill * refills;

const subMonitor = ({subscription, total}) => subscription ? total * 0.75 : total;


/* 
    Determine if the customer has a coupon
    If they do, subtract $10 from the cost after the subscription discount has been calculated
*/

const extremeCouponer = ({coupon, total}) =>  coupon ? total -10 : total;

// Combine all

function allDiscounts(customer) {
    customer.total = refillTotal(customer);
    customer.total = subMonitor(customer);
    customer.total = extremeCouponer(customer);
}

// Print the string "Your grand total is ${finalAmount}." 

console.log("Your grand total is: ");

console.log(allDiscounts(timmy));

console.log(allDiscounts(sarah));

console.log(allDiscounts(rocky));
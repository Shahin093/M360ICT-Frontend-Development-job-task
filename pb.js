/*
Task 01: Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.
*/

const customers = [
  {
    name: "Shahin",
    purchases: 3,
    loyaltyPoints: 4,
  },
  {
    name: "Tuhin",
    purchases: 7,
    loyaltyPoints: 6,
  },
  {
    name: "Rubin",
    purchases: 4,
    loyaltyPoints: 4,
  },
];

const doubleLoyaltyPoints = (customers) => {
  return customers.map((customer) => ({
    ...customer,
    loyaltyPoints:
      customer.purchases > 5
        ? customer.loyaltyPoints * 2
        : customer.loyaltyPoints,
  }));
};

const transformedCustomers  = doubleLoyaltyPoints(customers);
console.log(transformedCustomers );

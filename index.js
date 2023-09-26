// Write your solution in this file!
var customerName = `bob`;

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}
console.log(customerName);
//console.log(upperCaseCustomerName()); do not call
// calling causes one test to fail

function setBestCustomer(){
    bestCustomer = `not bob`;
}

function overwriteBestCustomer(){
    bestCustomer = `maybe bob`;
}

const leastFavouriteCustomer = `John`;

function changeLeastFavoriteCustomer(){
    leastFavouriteCustomer = `Paul`;
}
//bob is declared on the global scope
var customerName = "bob";

//modify to uppercase
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }

function setBestCustomer () {
    bestCustomer = 'not bob';
    return bestCustomer;
}
function overwriteBestCustomer () {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Daniel";
  }
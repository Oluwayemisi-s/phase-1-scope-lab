// Write your solution in this file!

var customerName = 'bob'
const leastFavoriteCustomer = 'Shawnte'
var bestCustomer

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
    return customerName
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer(name){
    bestCustomer = name
    return bestCustomer
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Not Shawnte'
    return leastFavoriteCustomer
}

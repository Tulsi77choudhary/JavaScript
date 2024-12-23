const accountId =  123445
let accountEmail = "tulsi@gmail.com"
var accountPassword = "23311"
accountCity = "Garra"

/*
Prefer not to use  var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail,accountId,accountCity, accountPassword])
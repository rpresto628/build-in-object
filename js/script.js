// date object
var date = new Date(); // new data with current date and time
console.log (date);

var newDate = new Date("January 31, 2019");
console. log(newDate);

console.log(date.getFullYear());
console.log(date.getYear());
//month
console.log(date.getMonth());
//date
console.log(date.getDate());
//day
console.log(date.getDay());
//hour
console.log(date.getHours());
//minutes
console.log(date.getMinutes());
//seconds
console.log(date.getSeconds());

//output: 04/30/2019
var month = date.getUTCMonth();
var day = date.getDate();
var year = date.getFullYear();

//format month to prefix 0 if single diget mont
//if (month.length = 1)
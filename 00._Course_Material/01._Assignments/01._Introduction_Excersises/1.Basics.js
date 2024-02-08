// ----------------------------------------------
// EXERCISE 1
// Show my name is Anders and my last name is Latif

const firstName = "Anders";
const lastName = 'Latif'
const fullName = `Anders ${lastName}`
console.log(fullName);

// ----------------------------------------------
// EXERCISE 2 - numbers and strings

const year = "2023";
const increment = 1;
const currentYear = Number(year)+increment;
const currentYearII = +year + increment; // plus string makes it a number. quick writing at the cost of readability
console.log(currentYear);
console.log(currentYearII);


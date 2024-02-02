// Const as default
const myName = "Dan"

const me = {    
};
// const is constant ONLY in terms of assignment
// NOT the value


me.name = myName;
console.log(me)

// SyntaxError: Missing initializer in const declaration
// constconsole.log(me)

// Synta test;

const hobbies = ["coding", "eating"];

hobbies.push("sleeping");

// hobbies = [];
// hobbies = "";

me.hobbies = hobbies;
console.log(me);

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

// // if

// if (true) {
//   console.log("Exectuing!");
// }

// if (false) {
//   console.log("Not Executing!");
// }

const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//   console.log("access token");
// }

const balance = 1000;
if (balance > 500) console.log("test");

// Nullish coalescing Operator (??): null undefined

let val1;
val1 = null ?? 18;
val2 = undefined ?? 25;
console.log(val1);

console.log(val2);

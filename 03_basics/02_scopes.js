// var c = 300

let a = 300; // Global Scope
if (true) {
  let a = 10; // Local Scope
  const b = 20;
  var c = 30;

  //   console.log("Inner :", a);
}
// function fun() {

// }
//
// console.log(a);
// console.log(b);
// console.log(c);
// fun();
// console.log(c);

// function two(username) {
//   console.log(username);
// }

function one() {
  const username = "Rakib";

    function two() {
      const website = "Youtube";
      console.log(username);
    }
  //   console.log(website);

  two();
}

one();

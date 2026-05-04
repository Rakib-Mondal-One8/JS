const arr = [1, 2, 3, 4, 5];
const obj = {
  name: "Rakib",
  id: "r2r452ew",
};

// for (const val of arr) {
//   console.log(val);
// }

// for (const key in obj) {
//   console.log("Key: ",key);
//   console.log("Val: ",obj[key]);
// }

const coding = ["js", "ruby", "rust", "c++", "c", "python"];

// coding.forEach( function name(item) {console.log(item);
// } )

// coding.forEach( (val)=>{
//     console.log(val);

// })

// coding.forEach(
//     (item,index,arr)=>{
//         console.log(item,index,arr);
//     }
// )

const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

// const newNums = myNums.filter((num) => num > 4);
// const newNums = myNums.filter((num) => {
//     return num>4
// });

// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) newNums.push(num);
// });

// console.log(newNums);

// const newNums = myNums.map((num) => {
//   return num + 10;
// });
// console.log(newNums);

const arr2 = [1, 2, 3];

// const Total = arr2.reduce((acc, curr) => {
//   return acc + curr;
// }, 0);
// console.log(Total);

const Cart = [
  {
    itemName: "JS",
    price: 900,
  },
  {
    itemName: "JS",
    price: 900,
  },
  {
    itemName: "JS",
    price: 900,
  },
  {
    itemName: "JS",
    price: 900,
  },
];

const sum = Cart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(sum);

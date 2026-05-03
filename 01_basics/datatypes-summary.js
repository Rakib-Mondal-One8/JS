// Stack (Primitive), Heap (Non-Primitive)

let myName = "RakibMondal";

let anotherName = myName;
anotherName = "ChaiorCode";

console.log(myName);

console.log(anotherName);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "user2@google.com";

console.log(userOne);
console.log(userTwo);

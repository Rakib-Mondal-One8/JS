// objects

const mySym = Symbol("key1");

const JsUser = {
  name: "Rakib",
  age: 20,
  [mySym]: "My key 1",
  location: "Joypur",
  email: "rakib@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Friday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(typeof JsUser[mySym]);

JsUser.greeting = function () {
  console.log("Hi this is Rakib");
};
JsUser.greetingTwo = function () {
  console.log(`Hi my name is ${this.name}`);
};

JsUser.greeting();
JsUser.greetingTwo();

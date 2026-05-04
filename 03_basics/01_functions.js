function sayMyName() {
  console.log("Rakib");
}
// sayMyName();

const fun2 = function () {
  console.log("Hey this is my function 2!");
};

// fun2();

const fun3 = function (a, b) {
  //   console.log(a + b);
  return a + b;
};

// fun3(3, 5);

result = fun3(3, 5);
// console.log(result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a user name");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("Rakib"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 500, 600));

const user = {
  username: "Rakib",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`,
  );
}

handleObject(user);
handleObject({
  username: "Harry",
  price: 399,
});

const arr = [1, 2, 3, 4, 5];

function returnSecondValue(getArr) {
  return getArr[1];
}

console.log(returnSecondValue(arr));


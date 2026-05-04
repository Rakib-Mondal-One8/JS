const user = {
  username: "Rakib",
  WelcomeMessage: function go() {
    console.log(this);
    console.log(`Hi Mr.${this.username}`);
  },
};

// user.WelcomeMessage();
// user.username = "John";
// user.WelcomeMessage()

function go() {
  let username = "Rakib";

  function go2() {
    console.log(this);
    console.log(this.username);
  }
  go2();
}
// go();

const addTwo = (a, b) => {
  return a + b;
};

console.log(addTwo(5, 2));

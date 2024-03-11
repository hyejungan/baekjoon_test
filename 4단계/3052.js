const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split("\n").map(Number);
let newArray = [];

input.forEach((n) => {
  const num = n % 42;

  if(newArray.indexOf(num) === -1) {
    newArray.push(num)
  }
});

console.log(String(newArray.length));


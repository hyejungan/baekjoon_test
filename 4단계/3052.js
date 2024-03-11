const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n").map(Number);
const newArray = [];

input.forEach((n) => {
  const num = n % 42;

  if(newArray.indexOf(num) === -1) {
    newArray.push(num)
  }
})

console.log(newArray.length);

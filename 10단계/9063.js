const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split("\n");

let xArr = [];
let yArr = [];

input.slice(1).forEach((nums) => {
  let [x, y] = nums.split(" ");
  xArr.push(x);
  yArr.push(y);
});

let a = Math.max(...xArr) - Math.min(...xArr);
let b = Math.max(...yArr) - Math.min(...yArr);

console.log(a * b);

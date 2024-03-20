const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = +fs.readFileSync(env);
let result = [];

for (let i = 1; i <= input; i++) {
  let arr = String(i).split("");

  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += Number(arr[j]);
  }
  sum += i;

  if (sum === input) result.push(i);
}

if (result.length === 0) console.log(0);
else console.log(Math.min(...result));

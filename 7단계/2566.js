const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

let max = 0;
let [N, M] = [1, 1];

input.map((arr, i) => {
  const splitNumber = arr.split(" ").map(Number);
  const maxNumber = Math.max(...splitNumber);
  if (maxNumber > max) {
    max = maxNumber;
    N = i + 1;
    M = splitNumber.indexOf(maxNumber) + 1;
  }
});

console.log(max)
console.log(N, M)

const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().toLowerCase().split("");

const check = input
  .map((str, i, arr) => {
    return str === arr[arr.length - i - 1];
  })
  .every((item) => item);

console.log(check ? 1 : 0);

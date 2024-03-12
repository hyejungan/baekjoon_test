const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split(" ");
let count = 0;

input.forEach((str) => {
  if(str !== '') {
    count ++;
  }
})

console.log(count)

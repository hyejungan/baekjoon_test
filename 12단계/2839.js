const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = +fs.readFileSync(env);

let result = -1;
let five = Math.floor(input / 5);

while (five >= 0) {
  let l = input - 5 * five;

  if (l % 3 === 0) {
    result = l / 3 + five;
    break
  } else {
    five -= 1;
  }
}

console.log(result);

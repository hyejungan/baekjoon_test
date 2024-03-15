const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = +fs.readFileSync(env);

let prev = 1;
let count = 1;
while (prev < input) {
  prev += 6 * count;
  count++;
}

console.log(count);

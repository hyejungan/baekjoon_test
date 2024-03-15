const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = +fs.readFileSync(env);

let total = 1;
let count = 1;

while (total < input) {
  total += count + 1;
  count++;
}

const n = count - (total - input);

if (count % 2 === 0) {
  console.log(`${n}/${count - n + 1}`);
} else {
  console.log(`${count - n + 1}/${n}`);
}

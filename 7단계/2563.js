const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

let paper = new Array(100).fill().map((a) => new Array(100).fill(0));
let count = 0;

for (let i = 1; i <= +input[0]; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      if (paper[j][k] === 0) {
        paper[j][k] = 1;
        count += 1;
      }
    }
  }
}

console.log(count);

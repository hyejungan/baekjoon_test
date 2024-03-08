const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

function solution(num, arr) {
  const sorting = arr.map((n) => +n).sort((a, b) => a - b);
  console.log(`${sorting.shift()} ${sorting.pop()}`);
}

solution(input[0], input[1].split(" "));

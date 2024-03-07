const fs = require("fs");

const env = process.platform === "linux" ? `dev/stdin` : "test.txt";

let input = fs
  .readFileSync(env)
  .toString()
  .split(" ")
  .map((num) => +num);

function solution(a, b) {
  const min = b - 45;
  if (min >= 0) {
    console.log(`${a} ${min}`);
  } else {
    if (a - 1 >= 0) {
      console.log(`${a - 1} ${60 + min}`);
    } else {
      console.log(`${24 - 1} ${60 + min}`);
    }
  }
}

solution(input[0], input[1]);

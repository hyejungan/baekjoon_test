const fs = require("fs");

const env = process.platform === "linux" ? `dev/stdin` : "test.txt";

let input = fs
  .readFileSync(env)
  .toString()
  .split(" ")
  .map((n) => +n);

function solution(arr) {
  if (arr[0] === arr[1] && arr[0] === arr[2] && arr[1] === arr[2]) {
    console.log(arr[0] * 1000 + 10000);
  } else if (arr[0] === arr[1] || arr[0] === arr[2]) {
    console.log(arr[0] * 100 + 1000);
  } else if (arr[1] === arr[2]) {
    console.log(arr[1] * 100 + 1000);
  } else {
    console.log(arr.sort()[2] * 100);
  }
}

solution(input);

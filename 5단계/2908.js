const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split(" ");

function solution(arr) {
  const reverseArr = arr.map((str) => Number(str.split("").reverse().join("")));
  console.log(Math.max(...reverseArr));
}

solution(input);

const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const num = input[0].split(" ");
const nums = input[1].split(" ");

function solution(arr) {
  let str = ''
  const filtering = arr.map((n) => +n).filter((n) => n < +num[1]);
  for(let i = 0; i < filtering.length; i++) {
    str += filtering[i] + ' '
  }
  console.log(str)
}

solution(nums);

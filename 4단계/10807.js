const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const nums = input[1].split(" ");
const find = input[2];

function solution(arr) {
  console.log(arr.filter((num) => +num === +find).length);
}

solution(nums);

const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

function solution(str) {
  const numArr = str.split("").map(Number);
  const hap = numArr.reduce((acc, cur) => {
    return acc + cur;
  });
  console.log(hap);
}

solution(input[1]);

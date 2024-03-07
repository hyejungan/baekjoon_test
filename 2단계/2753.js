const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = Number(fs.readFileSync(env).toString());

function solution(year) {
  if (year % 4 === 0 && (year % 100 !== 0) | (year % 400 === 0)) {
    console.log("1");
  } else {
    console.log("0");
  }
}

solution(input);

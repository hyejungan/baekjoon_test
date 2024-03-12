const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim();

function solution(str) {
  console.log(str.length);
}

solution(input);

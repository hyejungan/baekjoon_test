const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = Number(fs.readFileSync(env));

function solution(a) {
  console.log((a * (a + 1)) / 2);
}

solution(input);

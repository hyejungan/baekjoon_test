const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split("\n");

function solution(n, string) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += string[i][0] + string[i][string[i].length - 1] + "\n";
  }
  console.log(str);
}

solution(+input[0], input.slice(1));

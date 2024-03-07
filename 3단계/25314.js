const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = Number(fs.readFileSync(env));

function solution(a) {
  const count = a / 4;
  let str = "";
  for (let i = 1; i <= count; i++) {
    str += "long ";
  }
  console.log(str + "int");
}

solution(input);

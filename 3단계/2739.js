const fs = require("fs");

const env = process.platform === "linux" ? `dev/stdin` : "test.txt";

let input = Number(fs.readFileSync(env));

function solution(a) {
  for(let i = 1; i <= 9; i++) {
    console.log(`${a} * ${i} = ${a*i}`)
  }
}

solution(input)
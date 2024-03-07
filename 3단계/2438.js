const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = Number(fs.readFileSync(env));

function solution(a){
  let str = '';
  for(let i = 1; i <=a; i++) {
    str += '*'.repeat(i) +'\n'
  }
  console.log(str)
}

solution(input)
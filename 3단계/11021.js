const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const count = Number(input[0]);

function solution (arr) {
  let str ='';
  for(let i = 1; i <= count; i++) {
    const [a, b] = arr[i].split(' ');
    str += `Case #${i}: ` +  `${Number(a) + Number(b)}` + '\n'
  }
  console.log(str)
}

solution(input)
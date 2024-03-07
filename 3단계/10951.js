const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split('\n');

function solution(arr) {
  let str = '';
  for(let i = 0; i < arr.length; i++) {
    const [a, b] = arr[i].split(' ').map((n) => +n);
    if(0 >= a || b >= 10) break
    str += `${a + b}` + '\n'
  }
  console.log(str)
}

solution(input)
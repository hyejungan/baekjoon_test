const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim();

function solution(str) {
  let arr = [];

  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    arr.push(str.indexOf(String.fromCharCode(i)));
  }
  console.log(arr.join(" "));
}

solution(input);

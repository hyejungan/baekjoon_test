const fs = require("fs");

const env = process.platform === "linux" ? `${0, 'utf-8'}` : "test.txt";

let input = fs
  .readFileSync(env)
  .toString()
  .split("\n")
  .map((num) => +num);

function solution(a, b) {
  if (a > 0) {
    if (b > 0) {
      console.log("1");
    } else {
      console.log("4");
    }
  } else {
    if (b > 0) {
      console.log("2");
    } else {
      console.log("3");
    }
  }
}
console.log(input)
solution(input[0], input[1]);

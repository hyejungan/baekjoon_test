const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const totalPrice = Number(input[0]);
const totalCount = Number(input[1]);

function solution(arr) {
  let hap = 0;
  for (let i = 0; i < totalCount; i++) {
    const number = arr[i].split(" ").map((n) => +n);
    hap += number[0] * number[1];
  }
  if (hap === totalPrice) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

solution(input.slice(2));

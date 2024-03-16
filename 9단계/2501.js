const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [N, K] = fs.readFileSync(env).toString().split(" ").map(Number);

let NArr = [];
for (i = 1; i <= N; i++) {
  if (N % i === 0) {
    NArr.push(i);
  }
}

function solution(arr, n) {
  if (arr.length < n) {
    console.log(0);
  } else {
    console.log(arr[n - 1]);
  }
}

solution(NArr, K);

const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

function solution(arr, n, m) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        const hap = arr[i] + arr[j] + arr[k];
        const gap = M - hap;
        if(gap >= 0 && sum <= hap) {
          sum = hap
        }
      }
    }
  }
  console.log(sum);
}

solution(
  input[1]
    .split(" ")
    .map(Number),
  N,
  M
);

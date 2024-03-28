const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1);

let result = [];

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    let cnt = 0;
    let point = arr[i][j];
    for (let k = i; k < 8 + i; k++) {
      for (let n = j; n < 8 + j; n++) {
        if (k === i && n === j) {
          point = arr[i][j];
        } else {
          if (arr[k][n] === point) {
            cnt += 1;
            point = arr[k][n] === "B" ? "W" : "B";
          } else {
            point = arr[k][n] === "W" ? "W" : "B";
          }
        }

        if (n === 7 + j) {
          point = arr[k][n] === "W" ? "B" : "W";
        }
      }
    }
    result.push(cnt);
  }
}

console.log(Math.min(...result));

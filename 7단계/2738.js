const fs = require("fs");

const env = process.platform == "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let ArrA = [];
let ArrB = [];

input.slice(1, 1 + N).map((arr) => ArrA.push(arr.split(" ").map(Number)));

input.slice(1 + N).map((arr) => ArrB.push(arr.split(" ").map(Number)));

ArrA.map((arr, i) => {
  let str = "";
  for (let j = 0; j < M; j++) {
    str += arr[j] + ArrB[i][j] + " ";
  }
  console.log(str);
});

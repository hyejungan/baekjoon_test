const fs = require("fs");

const env = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let [M, N] = fs.readFileSync(env).toString().split("\n").map(Number);

console.log(M * N);

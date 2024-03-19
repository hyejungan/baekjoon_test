const fs = require("fs");
const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

const input = fs.readFileSync(env).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const c = parseInt(input[1]);
const n0 = parseInt(input[2]);

b <= (c - a) * n0 && c >= a ? console.log(1) : console.log(0);

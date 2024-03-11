const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const count = +input[0];
const subject = input[1].split(' ').map(Number);
const maxSub = Math.max(...subject)
const newScore = subject.map((sub) => sub/maxSub * 100)
const hap = newScore.reduce((acc, cur) => {return acc + cur})

console.log(hap/count)

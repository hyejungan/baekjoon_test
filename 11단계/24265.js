const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = +fs.readFileSync(env);

console.log((input * (input - 1)) / 2)
console.log(3)

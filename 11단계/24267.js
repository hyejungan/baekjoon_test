const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim();

const result = (BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6)
console.log(String(result))
console.log(3)

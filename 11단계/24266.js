const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = BigInt(fs.readFileSync(env).toString().trim());

console.log((input * input * input).toString());
console.log(3);

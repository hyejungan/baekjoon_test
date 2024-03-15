const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [N, radix] = fs.readFileSync(env).toString().trim().split(" ").map(Number);

const result = N.toString(radix);

console.log(result.toUpperCase());

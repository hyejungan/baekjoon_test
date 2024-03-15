const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split(" ");

const result = parseInt(input[0], +input[1]);

console.log(result);

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";
let input = require("fs").readFileSync(env).toString().trim();

console.log(input.length);

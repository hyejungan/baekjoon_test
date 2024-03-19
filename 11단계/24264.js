const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = +fs.readFileSync(env);

console.log(Math.pow(`${input}`, 2), 2);

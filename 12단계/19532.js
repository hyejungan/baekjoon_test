const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [a, b, c, d, e, f] = fs.readFileSync(env).toString().trim().split(" ").map(Number);

const x = (b * f - e * c) / (b * d - e * a);
const y = (a * f - d * c) / (a * e - d * b);

console.log(`${x} ${y}`);

const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim();

const CROATIAN = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

CROATIAN.map((str) => {
  input = input.replaceAll(str, "a");
});

console.log(input.length);

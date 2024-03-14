const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split("\n");

const POINT = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let hap = 0;
let total = 0;
input.map((sub) => {
  const p = sub.split(" ").slice(1);
  if(p[1] !== 'P') {
    hap += Number(p[0]) * POINT[p[1]];
    total += Number(p[0])
  }
});
console.log(hap / total);

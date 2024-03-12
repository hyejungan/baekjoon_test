const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim();

const alpaArr = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

let time = 0;
for (let i = 0; i < input.length; i++) {
  for (let x in alpaArr) {
    if (x.includes(input[i])) {
      time += alpaArr[x];
    }
  }
}

console.log(time);

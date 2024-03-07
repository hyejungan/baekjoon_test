const fs = require("fs");

const env = process.platform === "linux" ? `dev/stdin` : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const recent = input[0].split(" ").map((num) => +num);
const takeTime = parseInt(input[1]);

function solution(a, b, c) {
  const addMin = b + c;
  const addHour = Math.floor(addMin / 60);
  const resultHour = a + addHour;

  if (addHour >= 1) {
    if (resultHour >= 24) {
      console.log(`${resultHour - 24} ${addMin - 60 * addHour}`);
    } else {
      console.log(`${a + addHour} ${addMin - 60 * addHour}`);
    }
  } else {
    console.log(`${a} ${addMin}`);
  }
}

solution(recent[0], recent[1], takeTime);

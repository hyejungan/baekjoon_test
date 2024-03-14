const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split("\n");

let Arr = [];
input.slice(1).map((word) => {
  let str = "";
  let use = [];
  for (let i = 0; i < word.length; i++) {
    if (str !== word[i] && use.includes(word[i])) {
      Arr.push(false);
      return;
    } else {
      str = word[i];
      use.push(word[i]);
    }
  }
});

console.log(+input[0] - Arr.length);

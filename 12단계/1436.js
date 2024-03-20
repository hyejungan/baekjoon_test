const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = +fs.readFileSync(env);

for (let i = 666; ; i++) {
  let str = i.toString();
  if (str.includes("666")) {
    input -= 1;
  }

  if (input === 0) {
    console.log(i);
    break;
  }
}

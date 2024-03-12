const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split("\n");
let str = "";

for (let i = 1; i <= +input[0]; i++) {
  let newArr = input[i].split(" ");
  let newStr = "";
  for (let j = 0; j < newArr[1].trim().length; j++) {
    newStr += newArr[1][j].repeat(+newArr[0]);
  }
  str += newStr + "\n";
}

console.log(str);

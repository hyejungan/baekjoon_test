const fs = require("fs");
const env = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let input = fs.readFileSync(env, "utf8").trim();

let tag = false;
let ans = "";
let temp = "";

for (let a of input) {
  if (a === "<") {
    tag = true;
    ans += temp.split("").reverse().join("") + a;
    temp = "";
  } else if (a === ">") {
    tag = false;
    ans += temp + a;
    temp = "";
  } else if (a === " ") {
    ans += (!tag ? temp.split("").reverse().join("") : temp) + " ";
    temp = "";
  } else {
    temp += a;
  }
}

console.log(ans + temp.split("").reverse().join(""));

const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

for (i of input) {
  const [a, b] = i.split(" ").map(Number);
  
  if(a === b) break
  if (b % a === 0) {
    console.log("factor");
  }else if (a % b === 0) {
    console.log("multiple");
  } else {
    console.log('neither')
  }
}

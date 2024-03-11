const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n").map(Number);

const numArray = new Array(30).fill(0);

for(let i = 0; i < input.length; i++){
  numArray[input[i]-1] = input[i];
}

console.log(numArray.map((num, index) => {if(num === 0) return index + 1}).filter((num) => num !== undefined).join('\n'))
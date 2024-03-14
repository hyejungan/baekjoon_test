const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().toLowerCase().split("");

const setInput = new Set(input);

let newArr = [];
setInput.forEach((l) => {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (l === input[i]) {
      count += 1;
    }
  }
  newArr.push({ [l]: count });
});

let newCount = 0;
let result = "";

newArr.map((obj) => {
  if (Object.values(obj)[0] > newCount) {
    newCount = Object.values(obj)[0];
    result = Object.keys(obj)[0];
  } else if (Object.values(obj)[0] === newCount) {
    result = "?";
  }
});
console.log(result.toUpperCase());

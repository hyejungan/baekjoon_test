const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split("\n").map(Number);
input.pop();

let result = input.map((n) => {
  let arr = [1];
  for (let i = 2; i < n; i++) {
    if (n % i === 0) arr.push(i);
  }

  if (
    arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0) === n
  ) {
    return `${n} = ` + arr.join(" + ");
  } else {
    return `${n} is NOT perfect.`;
  }
});

console.log(result.join("\n"));

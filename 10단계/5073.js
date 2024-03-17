const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().trim().split("\n");

input.pop();

input.map((item) => {
  let [a, b, c] = item
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);

  if (c < a + b) {
    if (a == b && b == c && a == c) {
      console.log("Equilateral");
    } else if (a == b || b == c || a == c) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  } else {
    console.log("Invalid");
  }
});

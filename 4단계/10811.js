const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const basket = new Array(N).fill().map((_, index) => {
  return index + 1;
});

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  const newArray = [];

  for (let j = start; j <= end; j++) {
    newArray.push(basket[j - 1]);
  }
  newArray.reverse();
  basket.splice(start - 1, end - start + 1, ...newArray);
}

console.log(basket.join(" "));

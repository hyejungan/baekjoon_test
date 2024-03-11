const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = fs.readFileSync(env).toString().split("\n");

const [M, N] = input[0].split(" ").map(Number);
const basket = new Array(M).fill().map((_, index) => {
  return index + 1;
});

for (let i = 1; i <= N; i++) {
  const [l, k] = input[i].split(" ").map(Number);
  const newBasket = basket.slice();

  basket[l - 1] = newBasket[k - 1];
  basket[k - 1] = newBasket[l - 1];
}

console.log(basket.join(" "));

const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [day, night, tree] = fs.readFileSync(env).toString().split(" ").map(Number);

// {(day - night) * repeat} + day >= tree
// repeat = Math.ceil{(tree - day) / (day - night)} => 크거나 같게하기 위해 올림.

let repeat = Math.ceil((tree - day) / (day - night));

console.log(repeat + 1);

/**
 * 시간초과코드
 * function solution(day, night, tree) {
  let now = 0;
  let count = 1;

  while (now < tree) {
    now += day;

    if (now >= tree) {
      console.log(count);
      return;
    }
    now -= night;

    count++;
    if (now >= tree) {
      console.log(count);
      return;
    }
  }
  console.log(count);
}
 */

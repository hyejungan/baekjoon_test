const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [N, ...arr] = require("fs").readFileSync(env).toString().split("\n");

let result = [];

function solution(item) {
  if (item[0] === ")") return "NO";
  let hap = 1;

  for (let i = 1; i < item.length; i++) {
    item[i] === "(" ? (hap += 1) : (hap -= 1);

    if (hap < 0) return "NO";
  }

  if (hap > 0) return "NO";
  if (hap === 0) return "YES";
}

arr.map((item) => {
  result.push(solution(item));
});

console.log(result.join("\n"));

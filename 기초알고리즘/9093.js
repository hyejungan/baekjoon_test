const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let input = require("fs").readFileSync(env).toString().split("\n");

let result = "";
input.slice(1).map((string) => {
  result +=
    string
      .split("\n")
      .map((str) => {
        return str
          .split(" ")
          .map((word) => {
            return word.split("").reverse().join("");
          })
          .join(" ");
      })
      .join("") + "\n";
});

console.log(result);

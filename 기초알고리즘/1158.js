const fs = require("fs");
const env = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const [N, M] = fs.readFileSync(env, "utf8").trim().split(" ").map(Number);

let queue = Array.from({ length: N }, (_, i) => i + 1); 
let result = [];

let index = 0; 

while (queue.length > 0) {
    index = (index + M - 1) % queue.length; 
    result.push(queue.splice(index, 1)[0]); 
}

console.log(`<${result.join(", ")}>`);

const fs = require('fs');

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

let input = Number(fs.readFileSync(env).toString());

function solution (A) {
  if(A>=90) {
    console.log("A")
  } else if (A >=80) {
    console.log("B")
  } else if (A >= 70 ) {
    console.log("C")
  } else if (A >= 60 ) {
    console.log("D") 
  } else {
    console.log("F")
  }
}


solution(input)

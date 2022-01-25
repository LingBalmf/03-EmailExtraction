
const fs = require('fs');
const test_file = fs.readFileSync("test.txt",{encoding:"utf-8"});

console.log(typeof test_file);

let counter = 0
console.log(test_file.length);
for (let i = 0; i < test_file.length; i++) {
  
  if ((test_file.substring(i, i+13) === '@softwire.com')) { counter = counter + 1 }

}

console.log(counter);
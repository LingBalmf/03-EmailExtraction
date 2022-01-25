const fs = require('fs');
const test_file = fs.readFileSync("test.txt",{encoding:"utf-8"});

console.log(typeof test_file);
const myArray = test_file.split('@softwire.com');
const myArrayIdxCount = myArray.length;
console.log(myArrayIdxCount);



// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

console.log("before writing file");
fs.writeFile("write.txt", "Hello from async task", () => {
  console.log("written into file");
});

console.log("doing expensive execution");
for (let index = 0; index < 1000000; index++) {}
console.log("done expensive execution");

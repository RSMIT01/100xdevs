// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

let readfile = new Promise((resolve, reject) => {
  fs.readFile("smit.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    }
    let updated_data = data.replace(/\s+/g, " ");
    resolve(updated_data);
  });
});

readfile.then((data) => {
  fs.writeFile("updated.txt", data, () => {
    console.log("written into file");
  });
});

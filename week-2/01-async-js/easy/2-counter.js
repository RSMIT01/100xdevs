// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;
let counter = () => {
  setTimeout(() => {
    console.log(count);
    count += 1;
    counter();
  }, 1000);
};
counter();

// (Hint: setTimeout)

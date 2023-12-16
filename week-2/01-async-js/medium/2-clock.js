// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

setInterval(() => {
  console.clear();
  cur_date = new Date();
  console.log(
    `${cur_date.getHours()}:${cur_date.getMinutes()}:${cur_date.getSeconds()}`
  );
}, 1000);

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(() => {
  console.clear();
  cur_date = new Date();

  let suffix = cur_date.getHours() % 12 === 0 ? "AM" : "PM";
  console.log(
    `${cur_date.getHours()}:${cur_date.getMinutes()}:${cur_date.getSeconds()} ${suffix}`
  );
}, 1000);

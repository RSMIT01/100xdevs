/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length == 1) return true;
  var i = 0;
  var j = str.length - 1;
  var punctuations = ["?", ",", "!", " ", "."];
  str = str.toLowerCase();
  while (i < j) {
    if (punctuations.includes(str[i])) {
      i++;
      continue;
    }
    if (punctuations.includes(str[j])) {
      j--;
      continue;
    }
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;

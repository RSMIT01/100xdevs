/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var freq = {};
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (let i = 0; i < str1.length; i++) {
    freq[str1[i]] = (freq[str1[i]] || 0) + 1;
    freq[str2[i]] = (freq[str2[i]] || 0) - 1;
  }
  for (let key in freq) {
    if (freq[key] !== 0) {
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;

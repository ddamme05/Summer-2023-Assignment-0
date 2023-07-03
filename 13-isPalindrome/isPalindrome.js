function isPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
}

// Do not edit this line;
module.exports = isPalindrome;
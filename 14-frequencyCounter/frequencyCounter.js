function frequencyCounter(word) {
  const frequencyArr = {};

  for(let i = 0; i < word.length; i++) {
    const letter = word[i];
    
    if(frequencyArr[letter]) {
      frequencyArr[letter]++;
    } else {
      frequencyArr[letter] = 1;
    }
  }
  return frequencyArr;
}

// Do not edit this line;
module.exports = frequencyCounter;
function setUnionOfAnyAmountOfSets(...args) {
  const union = new Set()

  for(const set of args) {
    for(const value of set){
      union.add(value);
    }
  }
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
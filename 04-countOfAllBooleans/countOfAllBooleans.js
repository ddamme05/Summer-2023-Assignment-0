function countOfAllBooleans(arr) {
  let counter = 0;
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'boolean'){
      counter++;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
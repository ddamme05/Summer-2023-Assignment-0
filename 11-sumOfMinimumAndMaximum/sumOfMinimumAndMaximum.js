function sumOfMinimumAndMaximum(nums) {
  let begin = nums[0];
  let end = nums[0];

  for(let i = 1; i < nums.length; i++){
    if(nums[i] < begin){
      begin = nums[i];
    }
    if(nums[i] > end){
      end = nums[i];
    }
  }
  return begin + end;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
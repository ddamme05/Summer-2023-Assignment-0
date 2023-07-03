function pairSum(nums, target) {
  if (nums.length <= 1) {
      throw new Error("Invalid nums.")
  }
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (numSet.has(complement)) {
          return true;
      }
      numSet.add(nums[i]);
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
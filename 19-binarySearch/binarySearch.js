class MySolution {
  constructor() {
      this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target, left = 0, right = nums.length - 1) {
      if (left > right) {
          return false;
      }

      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
          return true;
      } else if (nums[mid] > target) {
          return this.binarySearch(nums, target, left, mid - 1);
      } else {
          return this.binarySearch(nums, target, mid + 1, right);
      }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
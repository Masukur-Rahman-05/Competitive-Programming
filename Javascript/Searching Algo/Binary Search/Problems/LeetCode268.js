const missingNum = (nums) => {
  let n = nums.length;
  nums = new Int32Array(nums);

  let sum = (n * (n + 1)) / 2;

  for (let i = 0; i < n; i++) {
    sum -= nums[i];
  }

  return sum;
};

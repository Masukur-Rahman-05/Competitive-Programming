const findAllIndices = (nums, target) => {
  let length = nums.length;

  nums = new Int32Array(nums).sort();
  let result = [];

  for (let i = 0; i < length; i++) {
    if (nums[i] === target) {
      result.push(i);
    }
  }

  return result;
};

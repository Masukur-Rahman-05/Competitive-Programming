/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9


*/

const WaterAmount = (height) => {
  if (height.length < 2) return 0;

  let left = 0;
  let right = height.length - 1;
  let total = 0;
  let min = 0;

  while (left <= right) {
    if (height[left] < height[right]) {
      if (height[left] < min) {
        total += min - height[left];
      }

      min = Math.max(min, height[left]);
      left++;
    } else {
      if (height[right] < min) {
        total += min - height[right];
      }
      min = Math.max(min, height[right]);
      right--;
    }
  }
  return total;
};

console.log(WaterAmount([3, 0, 1, 0, 4, 0, 2]));
console.log(WaterAmount([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(WaterAmount([4, 2, 0, 3, 2, 5]));

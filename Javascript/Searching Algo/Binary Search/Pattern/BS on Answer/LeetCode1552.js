/*
In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. Rick has n empty baskets, the ith basket is at position[i], Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.

Rick stated that magnetic force between two different balls at positions x and y is |x - y|.

Given the integer array position and the integer m. Return the required force.

 

Example 1:

Input: position = [1,2,3,4,7], m = 3
Output: 3
Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.

Example 2:

Input: position = [5,4,3,2,1,1000000000], m = 2
Output: 999999999
Explanation: We can use baskets 1 and 1000000000.

*/

const minForce = (position, m) => {
  let len = position.length;

  position = new Int32Array(position).sort();

  let left = 1;
  let right = position[len - 1] - position[0];
  let ans = 0;

  const canPlace = (d) => {
    let count = 1;
    let prev = position[0];

    for (let i = 0; i < len; i++) {
      if (position[i] - prev >= d) {
        prev = position[i];
        count++;
      }
    }

    return count >= m;
  };

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (canPlace(mid)) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return ans;
};

console.log(minForce([1, 2, 3, 4, 7], 3));
console.log(minForce([5, 4, 3, 2, 1, 1000000000], 2));

/*
The range of distance is from position 0 to last position value. so the answer will be lies in this range

we will check that can we place the balls in the baskets with this distance?
if it possible then we will move to the right else to the left

*/

/*
You are given a strictly increasing integer array rungs that represents the height of rungs on a ladder. You are currently on the floor at height 0, and you want to reach the last rung.

You are also given an integer dist. You can only climb to the next highest rung if the distance between where you are currently at (the floor or on a rung) and the next rung is at most dist. You are able to insert rungs at any positive integer height if a rung is not already there.

Return the minimum number of rungs that must be added to the ladder in order for you to climb to the last rung.

 

Example 1:

Input: rungs = [1,3,5,10], dist = 2
Output: 2
Explanation:
You currently cannot reach the last rung.
Add rungs at heights 7 and 8 to climb this ladder. 
The ladder will now have rungs at [1,3,5,7,8,10].

Example 2:

Input: rungs = [3,6,8,10], dist = 3
Output: 0
Explanation:
This ladder can be climbed without adding additional rungs.

Example 3:

Input: rungs = [3,4,6,7], dist = 2
Output: 1
Explanation:
You currently cannot reach the first rung from the ground.
Add a rung at height 1 to climb this ladder.
The ladder will now have rungs at [1,3,4,6,7].

*/

//4ms Runtime.....................................................................................
/*
const minRung = (rungs, dist) => {
  let length = rungs.length;
  let count = 0;

  const rungAmount = (first, second, d) => {
    let diff = second - first;
    if (diff > d) {
      return Math.floor((diff - 1) / d);
    }

    return 0;
  };
  count += rungAmount(0, rungs[0], dist);

  for (let i = 0; i < length - 1; i++) {
    if (rungs[i + 1] - rungs[i] > dist) {
      count += rungAmount(rungs[i], rungs[i + 1], dist);
    }
  }

  return count;
};
*/

const minRung = (rungs, dist) => {
  let count = 0;
  let prev = 0;
  let length = rungs.length;

  for (let i = 0; i < length; i++) {
    let diff = rungs[i] - prev;

    if (diff > dist) {
      count += Math.floor((diff - 1) / dist);
    }

    prev = rungs[i];
  }

  return count;
};

console.log(minRung([1, 3, 5, 10], 2));
console.log(minRung([3, 6, 8, 10], 3));
console.log(minRung([3, 4, 6, 7], 2));

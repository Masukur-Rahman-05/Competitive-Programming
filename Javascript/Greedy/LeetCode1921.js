/*
You are playing a video game where you are defending your city from a group of n monsters. You are given a 0-indexed integer array dist of size n, where dist[i] is the initial distance in kilometers of the ith monster from the city.

The monsters walk toward the city at a constant speed. The speed of each monster is given to you in an integer array speed of size n, where speed[i] is the speed of the ith monster in kilometers per minute.

You have a weapon that, once fully charged, can eliminate a single monster. However, the weapon takes one minute to charge. The weapon is fully charged at the very start.

You lose when any monster reaches your city. If a monster reaches the city at the exact moment the weapon is fully charged, it counts as a loss, and the game ends before you can use your weapon.

Return the maximum number of monsters that you can eliminate before you lose, or n if you can eliminate all the monsters before they reach the city.

 

Example 1:

Input: dist = [1,3,4], speed = [1,1,1]
Output: 3
Explanation:
In the beginning, the distances of the monsters are [1,3,4]. You eliminate the first monster.
After a minute, the distances of the monsters are [X,2,3]. You eliminate the second monster.
After a minute, the distances of the monsters are [X,X,2]. You eliminate the third monster.
All 3 monsters can be eliminated.

Example 2:

Input: dist = [1,1,2,3], speed = [1,1,1,1]
Output: 1
Explanation:
In the beginning, the distances of the monsters are [1,1,2,3]. You eliminate the first monster.
After a minute, the distances of the monsters are [X,0,1,2], so you lose.
You can only eliminate 1 monster.

Example 3:

Input: dist = [3,2,4], speed = [5,3,2]
Output: 1
Explanation:
In the beginning, the distances of the monsters are [3,2,4]. You eliminate the first monster.
After a minute, the distances of the monsters are [X,0,2], so you lose.
You can only eliminate 1 monster.

*/

// O(nlogn)
/*
const defeatMonster = (dist, speed) => {
  let count = 0;
  const times = new Int32Array(
    dist.map((d, i) => Math.ceil(d / speed[i]))
  ).sort();
  let length = times.length;

  for (let i = 0; i < length; i++) {
    if (times[i] <= i) {
      return count;
    }

    count++;
  }

  return count;
};
*/

//O(n)

const defeatMonster = (dist, speed) => {
  let n = dist.length;

  const monsterAmount = new Array(n).fill(0);
  let kills = 0;

  for (let i = 0; i < n; i++) {
    let time = Math.ceil(dist[i] / speed[i]);

    if (time < n) {
      monsterAmount[time]++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (kills + monsterAmount[i] > i) {
      return i;
    }

    kills += monsterAmount[i];
  }

  return n;
};
console.log(defeatMonster([1, 3, 4], [1, 1, 1]));
console.log(defeatMonster([1, 1, 2, 3], [1, 1, 1, 1]));
console.log(defeatMonster([3, 2, 4], [5, 3, 2]));

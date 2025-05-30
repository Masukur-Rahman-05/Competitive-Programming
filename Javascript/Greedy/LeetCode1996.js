/*
You are playing a game that contains multiple characters, and each of the characters has two main properties: attack and defense. You are given a 2D integer array properties where properties[i] = [attacki, defensei] represents the properties of the ith character in the game.

A character is said to be weak if any other character has both attack and defense levels strictly greater than this character's attack and defense levels. More formally, a character i is said to be weak if there exists another character j where attackj > attacki and defensej > defensei.

Return the number of weak characters.

 

Example 1:

Input: properties = [[5,5],[6,3],[3,6]]
Output: 0
Explanation: No character has strictly greater attack and defense than the other.

Example 2:

Input: properties = [[2,2],[3,3]]
Output: 1
Explanation: The first character is weak because the second character has a strictly greater attack and defense.

Example 3:

Input: properties = [[1,5],[10,4],[4,3]]
Output: 1
Explanation: The third character is weak because the second character has a strictly greater attack and defense.

*/

//184 ms

const weakChar = (properties) => {
  let length = properties.length;
  properties.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  let maxDefense = 0;
  let count = 0;

  for (let i = 0; i < length; i++) {
    let defense = properties[i][1];
    if (defense < maxDefense) {
      count++;
    } else {
      maxDefense = defense;
    }
  }

  return count;
};

console.log(
  weakChar([
    [5, 5],
    [6, 3],
    [3, 6],
  ])
);
console.log(
  weakChar([
    [2, 2],
    [3, 3],
  ])
);
console.log(
  weakChar([
    [1, 5],
    [10, 4],
    [4, 3],
  ])
);

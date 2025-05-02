/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0

*/

const coinChange = (coins, amount) => {
  if (amount === 0) {
    return 0;
  }
  if (coins.length === 1 && coins[0] > amount) {
    return -1;
  }

  let result = new Array(amount + 1).fill(amount + 1);
  result[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        result[i] = Math.min(result[i], result[i - coin] + 1);
      }
    }
  }

  return result[amount] > amount ? -1 : result[amount];
};

console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));

/*
You are given two strings current and correct representing two 24-hour times.

24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

Return the minimum number of operations needed to convert current to correct.

 

Example 1:

Input: current = "02:30", correct = "04:35"
Output: 3
Explanation:
We can convert current to correct in 3 operations as follows:
- Add 60 minutes to current. current becomes "03:30".
- Add 60 minutes to current. current becomes "04:30".
- Add 5 minutes to current. current becomes "04:35".
It can be proven that it is not possible to convert current to correct in fewer than 3 operations.

Example 2:

Input: current = "11:00", correct = "11:01"
Output: 1
Explanation: We only have to add one minute to current, so the minimum number of operations needed is 1.

*/

const convertTime = (current, correct) => {
  let count = 0;

  let newCurrent = current.split(":").map(Number);
  let newCorrect = correct.split(":").map(Number);

  let currentMinutes = newCurrent[0] * 60 + newCurrent[1];
  let correctMinutes = newCorrect[0] * 60 + newCorrect[1];

  let diff = correctMinutes - currentMinutes;

  while (diff > 0) {
    if (diff >= 60) {
      diff -= 60;
      count++;
    } else if (diff >= 15) {
      diff -= 15;
      count++;
    } else if (diff >= 5) {
      diff -= 5;
      count++;
    } else {
      diff -= 1;
      count++;
    }
  }

  return count;
};

console.log(convertTime("02:30", "04:35"));
console.log(convertTime("11:00", "11:01"));

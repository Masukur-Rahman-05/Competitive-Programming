const guess = (num, pick = 1) => {
  if (num === pick) return 0;
  return num < pick ? 1 : -1;
};

const guessNumber = (n) => {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let result = guess(mid);

    if (result === 0) {
      return mid;
    } else if (result === -1) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
console.log(guessNumber(1));

const maxDigit = (number, digit) => {
  let max = "";
  let length = number.length;

  for (let i = 0; i < length; i++) {
    if (number[i] === digit) {
      let currentMax = number.slice(0, i) + number.slice(i + 1);

      if (currentMax > max) {
        max = currentMax;
      }
    }
  }

  return max;
};

console.log(maxDigit("1231", "1"));
console.log(maxDigit("551", "5"));

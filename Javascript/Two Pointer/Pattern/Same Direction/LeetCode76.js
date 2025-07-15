const minSubstring = (s, t) => {
  let sLen = s.length;
  let tLen = t.length;
  let left = 0;
  let res = [-1, -1];
  let min = Infinity;

  let have = 0;
  let need = 0;

  let map = new Map();
  let windowMap = new Map();

  for (let i = 0; i < tLen; i++) {
    let char = t[i];
    map.set(char, (map.get(char) || 0) + 1);
  }

  need = map.size;

  for (let right = 0; right < sLen; right++) {
    let rightChar = s[right];

    windowMap.set(rightChar, (windowMap.get(rightChar) || 0) + 1);

    if (windowMap.get(rightChar) === map.get(rightChar)) {
      have++;
    }

    while (have === need) {
      if (right - left + 1 < min) {
        res = [left, right];
        min = right - left + 1;
      }

      let leftChar = s[left];

      windowMap.set(leftChar, windowMap.get(leftChar) - 1);

      if (map.has(leftChar) && windowMap.get(leftChar) < map.get(leftChar)) {
        have--;
      }

      left++;
    }
  }

  if (min === Infinity) {
    return "";
  }

  const [start, end] = res;

  return s.slice(start, end + 1);
};

console.log(minSubstring("ADOBECODEBANC", "ABC"));
console.log(minSubstring("a", "a"));
console.log(minSubstring("a", "aa"));

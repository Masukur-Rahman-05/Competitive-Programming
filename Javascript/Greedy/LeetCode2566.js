const minMaxDiff = (num) => {
  let str = String(num);
  let length = str.length;

  const getMax = () => {
    for (let i = 0; i < length; i++) {
      if (str[i] !== "9") {
        return parseInt(str.replaceAll(str[i], "9"));
      }
    }
    return num;
  };

  const getMin = () => {
    for (let i = 0; i < length; i++) {
      if (str[i] !== "0") {
        return parseInt(str.replaceAll(str[i], "0"));
      }
    }
    return num;
  };

  let max = getMax();
  let min = getMin();
  return max - min;
};

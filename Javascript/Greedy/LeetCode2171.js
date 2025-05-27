const minOperations = (beans) => {
  beans = new Int32Array(beans).sort();

  let length = beans.length;
  let total = 0;
  let minRemoved = Infinity;

  for (let i = 0; i < length; i++) {
    total += beans[i];
  }

  for (let i = 0; i < length; i++) {
    let removed = total - beans[i] * (length - i);
    minRemoved = Math.min(minRemoved, removed);
  }

  return minRemoved;
};

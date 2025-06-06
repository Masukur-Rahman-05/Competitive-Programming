const fairCandySwap = (aliceSizes, bobSizes) => {
  aliceSizes = new Int32Array(aliceSizes);
  let aliceTotal = aliceSizes.reduce((acc, val) => acc + val, 0);
  let bobTotal = bobSizes.reduce((acc, val) => acc + val, 0);

  let delta = (bobTotal - aliceTotal) / 2;
  let length = aliceSizes.length;

  const bobSet = new Set(bobSizes);

  for (let i = 0; i < length; i++) {
    let a = aliceSizes[i];
    let b = a + delta;

    if (bobSet.has(b)) {
      return [a, b];
    }
  }
};

/*
Why do we calculate this way?

We want to find a pair of values a from aliceSizes and b from bobSizes such that:

Alice's total after swap = Bob's total after swap

That means:
sumAlice - a + b === sumBob - b + a

sumAlice - a + b = sumBob - b + a
sumAlice - sumBob + 2b - 2a = 0
2b - 2a = sumBob - sumAlice
b - a = (sumBob - sumAlice) / 2
delta = (sumBob - sumAlice) / 2;


b = a + delta

Why it doesn’t matter if delta is negative:

If sumAlice > sumBob, delta will be negative — meaning Bob needs to gain and Alice needs to lose. 
That still works, because we're looking for a pair such that:

*/

function positiveSum(arr) {
  return arr.reduce((sum, current) => {
    if (current > 0) {
      return sum + current;
    } else {
      return sum;
    }
  }, 0);
}
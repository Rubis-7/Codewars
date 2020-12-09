const paintLetterboxes = (start, end) => {
  let res = Array(10).fill(0);
  for (let i = start; i <= end; i++) {
    for (let n of (i + '')) {
      res[n]++;
    }
  }
  return res;
}
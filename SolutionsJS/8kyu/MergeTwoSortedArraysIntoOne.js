function mergeArrays(arr1, arr2) {
  let sorted = [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
  return sorted;
}
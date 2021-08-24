function sumItems(array) {
  let arrSum = 0;
  for (const arr of array) {
    if (Array.isArray(arr)) {
      arrSum = arrSum + sumItems(arr);
    } else {
      arrSum = arrSum + arr;
    }
  }
  return arrSum;
}

module.exports = sumItems;

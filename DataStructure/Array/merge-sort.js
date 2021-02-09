function mergeSortArrays(arr1, arr2) {
  const mergedArr = [];

  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;

  // check nput

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArr.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  return mergedArr;
}

console.log(mergeSortArrays([0, 3, 4, 31], [30, 6, 4]).toString());

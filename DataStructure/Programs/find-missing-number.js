function missing(numbers) {
  const numberArray = numbers.sort((num1, num2) => {
    return num1 - num2;
  });
  var x = 0;
  const missArrList = [];
  for (var i = 0; i < numberArray.length; i++) {
    x = x + 1;
    if (numberArray[i] != x) {
      missArrList.push(x);
      x++;
    }
  }
  return missArrList;
}
console.log(missing([7, 8, 3, 4, 10, 6]));

//Google Question

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Space complexity is:  O(n)
function firstRecurringCharacter(inputArr) {
  let map = {};

  for (let i = 0; i < inputArr.length; i++) {
    if (map[inputArr[i]] !== undefined) {
      return inputArr[i];
    } else {
      map[inputArr[i]] = i;
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter("aiyaiz")); String

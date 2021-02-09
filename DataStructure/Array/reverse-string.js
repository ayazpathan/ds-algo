// Create function that reverse a string

function reverseOne(str) {
  // check input

  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

function reverseTwo(str) {
  return str.split("").reverse().join("");
}

const reverseThree = (str) => str.split("").reverse().join("");

const reverseFour = (str) => [...str].reverse().join("");

console.log(reverseOne("My Name Is Aiyazkhan"));
console.log(reverseTwo("My Name Is Khan"));
console.log(reverseThree("I am Bradely Cooper"));
console.log(reverseFour("Happy New Year"));

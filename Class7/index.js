let firstNumbers = [1, 2, 5, 7, 2, 9, 1];
let secondNumbers = [1, 6, 2, 8, 32, 12, 88, 7, 97];

const difference = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    const arr1El = arr1[i];
    let goodToGo = true;
    for (let i = 0; i < arr2.length; i++) {
      const arr2El = arr2[i];
      if (arr1El === arr2El) gootToGo = false;
    }
    if (goodToGo) result.push(arr1El);
  }
  for (let i = 0; i < arr2.length; i++) {
    const arr2El = arr2[i];
    let goodToGo = true;
    for (let i = 0; i < arr1.length; i++) {
      const arr1El = arr1[i];
      if (arr1El === arr2El) gootToGo = false;
    }
    if (goodToGo) result.push(arr2El);
  }
  return result;
};

console.log(difference(firstNumbers, secondNumbers));

let diffArr = [
  ...flatten(firstNumbers).filter(f => !secondNumbers.includes(f)),
  ...flatten(secondNumbers).filter(s => !firstNumbers.includes(s))
];

function flatten(arr) {
  return arr
    .toString()
    .split(",")
    .map(n => Number(n));
}

// spread operator is just a for loop that spreads all elements of array.

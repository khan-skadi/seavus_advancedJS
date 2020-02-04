// Task 1
function numbersDivisibleByThree() {
  let numbers = [];
  for (let i = 0; i <= 1000; i++) {
    numbers[i] = i;
  }

  //   console.log(numbers);

  let arr = [];
  for (let j = 1; j <= numbers.length; j++) {
    if (j % 3 === 0) {
      arr.push(j);
    }
  }
  //   console.log(arr);
}

numbersDivisibleByThree();

// Task 2
function numbersDivisibleByFour() {
  let numbers = [];
  for (let i = 0; i <= 1000; i++) {
    numbers[i] = i;
  }

  let arr = [];
  for (let j = 1; j <= numbers.length; j++) {
    if (j % 4 === 0 && j % 2 === 0) {
      arr.push(j);
    }
  }
  console.log(arr);
}

numbersDivisibleByFour();

// Task 3
function numbersThatEndInOne() {
  let numbers = [];
  for (let i = 0; i <= 1000; i++) {
    numbers[i] = i;
  }
  let lastDigit = [];
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 10 === 1) {
      lastDigit.push(numbers[i]);
    }
  }

  console.log(lastDigit);
}

numbersThatEndInOne();

let test = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22
];

// Task 4
function cleanArray(arr) {
  return arr.filter(el => typeof el === "string");
}

console.log(cleanArray(test));

// Task 5
function cleanArray2(arr) {
  return arr.filter(el => typeof el === "number");
}

console.log(cleanArray2(test));

// Task 6
function cleanArray(arr) {
  return arr.filter(
    el =>
      typeof el === "string" && typeof el === undefined && typeof el === null
  );
}

console.log(cleanArray(test));

// Task 7
let colorNode = document.getElementById("color");
let fontSizeNode = document.getElementById("font_size");
let textNode = document.getElementById("text");
let buttonNode = document.getElementById("button");
let button2Node = document.getElementById("button2");
let h1Node = document.getElementById("h1Text");
let rootNode = document.getElementById("root");

buttonNode.addEventListener("click", () => {
  h1Node.setAttribute("style", `font-size: ${fontSizeNode.value}px`);
  h1Node.textContent = textNode.value;
  h1Node.setAttribute("style", `color: ${colorNode.value}`);
});

// Task 8

button2Node.addEventListener("click", () => {
  let ulNode = document.createElement("ul");
  let liNode = document.createElement("li");
  rootNode.appendChild(ulNode);
  ulNode.appendChild(liNode);

  liNode.textContent = textNode.value + ",";
  liNode.setAttribute("style", `color: ${colorNode.value}`);
  liNode.style.fontSize = `${fontSizeNode.value}px`;

  ulNode = `<ul style="color:${colorNode.value}; font-size:${
    fontSizeNode.value
  }px">${generateListItems(items)}</ul>`;
  let generatedUlDiv = document.getElementById("root");
  generatedUlDiv.innerHTML = ulNode + generatedUlDiv.innerHTML;

  function generateListItems(items) {
    let result = "";

    for (const item of items) {
      result += `<li>${item}</li>`;
    }

    return result;
  }
});

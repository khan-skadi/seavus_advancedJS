// let driver = {
//     firstName: Peter,
//     lastName: Kartalov,
//     available: true
// }

// updateDriver(() => {
//     return {
//         ...driver,
//         available: false
//     }
// })

// updateDriver({
//     ...driver,
//     available: false
// })

// pay attention where to use arrow function and when regular functions. They have different scopes on "this"
// let rgb = [123, 255, 12];
// const [red, green, blue] = rgb;

// let junk = [43, "dejan", 122, [1, 2, 3], function() {}];
// const [num, string, num2, [arrNum1, arrNum2]] = junk;
// const [num, , num2, [arrNum1, , arrNum3]] = junk;
// const [, , , numArr, emptyFunc] = junk;

let user = {
  name: "John",
  years: 30
};

const { name, years: age, isAdmin = false } = user;
// const { age } = user;
// const { isAdmin } = user;
console.log(name);
console.log(age);
console.log(isAdmin);

let cat = {
  name: "",
  party: "vmro"
};

let dog = {
  ...cat
};

function makeAjax(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url,
      success: resolve,
      error: reject
    });
  });
}

makeAjax("https://swapi.co/api/starships/9/")
  .then(data => console.log(data))
  .catch(err => console.log(err));

function numPromise(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        let result = num * num;
        console.log(result);
        resolve(result);
      } else {
        let result = num + num;
        console.log(result);
        resolve(result);
      }
    }, 300);
  });
}

numPromise(8)
  .then(result1 => numPromise(result1))
  .then(result2 => numPromise(result2))
  .then(result3 => console.log(result3));

// async function numAsync(num) {
//   let result1 = await numPromise(num);
//   let result2 = await numPromise(result1);
//   let result3 = await numPromise(result2);

//   console.log(result1 + result2 + result3);
// }

// function docPromise(data) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       if (resolve) {
//         let types = data.filter(data => data.type === "pdf");
//         console.log(types.map(type => type.name));
//       }
//     }, 1000);
//   });
// }

// fetch(
//   "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%208%20-%20Promise/materials/documents.json"
// )
//   .then(res => res.json())
//   .then(data => {
//     docPromise(data);
// let types = data.filter(data => data.type === "pdf");
// console.log(types.map(type => type.name));
//   });
// ---------------------------------------------
// fetch(
//   "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%208%20-%20Promise/materials/documents.json"
// )
//   .then(res => res.json())
//   .then(data => {
//     let filteredData = data.filter(g => g.type === "pdf");
//     for (let i = 1; i < filteredData.length; i++) {
//       const element = filteredData[i];
//       setTimeout(() => {
//         console.log(element.name);
//       }, 1000 * i);
//     }
//   });

function printName(name, ms = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, ms);
  });
}

// fetch(
//   "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%208%20-%20Promise/materials/documents.json"
// )
//   .then(res => res.json())
//   .then(data => data.filter(g => g.type === "pdf"))
//   .then(filteredData => {
//     printName(filteredData[0].name).then(name => {
//       printName(filteredData[1]).then(name => console.log("Finished"));
//     });
//   });

// If its a promise you need to use 'await'
async function printDocuments(url) {
  let res = await fetch(url);
  let data = await res.json();
  let filteredData = data.filter(n => n.type === "pdf");
  //   await printName(filteredData[0]);
  //   await printName(filteredData[1]);
  //   await printName(filteredData[2]);
  for (const doc of filteredData) {
    await printName(doc.name);
  }
}

printDocuments(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%208%20-%20Promise/materials/documents.json"
);

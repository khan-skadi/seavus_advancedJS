// // let xhr = new XMLHttpRequest();
// // console.log(XMLHttpRequest);
// // console.log(xhr);

// // The dollar sign is an object. That object has properties and methods.
// $.ajax({
//   url:
//     "https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class1/students.json",
//   success: function(response) {
//     console.log(JSON.parse(response));
//   },
//   error: function(err) {
//     console.log(err);
//   }
// });

// // ajax returns status code. if success do one code, if not success do other code.
// // fetch
// fetch(
//   "https://raw.githubusercontent.com/sedc-codecademy/sedc7-04-ajs/master/g2/Class1/students.json"
// )
//   //response is an object. I just need the Content of the object so i return response.json()
//   .then(response => {
//     return response.json();
//   })
//   // this data is actually the content passed in from the previous .then()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// // Promise is an object. It has a method .then(). It also has states(pending, resolved, rejected).

// Create a button When the button is clicked, get the data from a given url with an AJAX call.
// Print the name of the academy in an h1 tag.
// Print all student names in an unordered list.
// URL: https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%203%20-%20AJAX/Exercises/students.json
// NOTE: You need to parse this data before using it.

// Task 1
let rootNode = document.getElementById("root");
let btnNode = document.getElementById("button");
let h1Node = document.getElementById("h1");
let ulNode = document.getElementById("ul");

btnNode.addEventListener("click", () => {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g3/Class%203%20-%20AJAX/Exercises/students.json"
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      h1Node.textContent = "Name of academy:" + data.academy;
      for (let i = 0; i < data.students.length; i++) {
        let liNode = document.createElement("li");
        ulNode.appendChild(liNode);
        liNode.textContent = data.students[i];
      }
    })
    .catch(err => {
      console.log(err);
    });
});

// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:

// Height
// Weight
// Eye color
// Hair color
// URL: https://swapi.co/api/people/1
// Task 2
let branchNode = document.getElementById("branch");
let branchBtnNode = document.getElementById("branchButton");
let h1Node2 = document.getElementById("h12");

branchBtnNode.addEventListener("click", () => {
  fetch("https://swapi.co/api/people/1")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      h1Node2.textContent = "Person name: " + data.name;
      // Find a <table> element with id="myTable":
      let table = document.createElement("table");
      table.setAttribute("style", "border: 1px solid black; margin-top: 10px");
      branchNode.appendChild(table);
      // Create an empty <tr> element and add it to the 1st position of the table:
      let row = table.insertRow(0);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);
      // Add some text to the new cells:
      cell1.innerHTML = data.height;
      cell2.innerHTML = data.mass;
      cell3.innerHTML = data.eye_color;
      cell4.innerHTML = data.hair_color;
      cell1.setAttribute("style", "border: 1px solid black");
      cell2.setAttribute("style", "border: 1px solid black");
      cell3.setAttribute("style", "border: 1px solid black");
      cell4.setAttribute("style", "border: 1px solid black");
    })
    .catch(err => {
      console.log(err);
    });
});

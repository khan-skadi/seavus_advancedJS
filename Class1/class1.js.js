function Student(firstName, lastName, birthYear, academy, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.academy = academy;
  this.grades = grades;

  this.getAge = function() {
    let date = new Date();
    let year = date.getFullYear();
    return year - this.birthYear;
  };

  this.getInfo = function() {
    return `This is student ${this.firstName} ${this.lastName} from the academy ${this.academy}`;
  };

  this.getGradesAverage = function(arr) {
    this.sum = 0;
    this.averageGrade = 0;
    for (const e of arr) {
      this.sum = this.sum + e;
      this.averageGrade = this.sum / arr.length;
    }
    return this.averageGrade;
  };
}

let studentArray = [];

let student1 = new Student("Peter", "Kartalov", "1993", "Seavus", [
  10,
  8,
  6,
  10
]);
let student2 = new Student("Dusko", "Videski", "1987", "Seavus", [9, 7, 10, 8]);
let student3 = new Student("Monika", "Sazdova", "1992", "Seavus", [
  9,
  9,
  10,
  8
]);

studentArray.push(student1, student2, student3);
console.log(student1.getGradesAverage(student1.grades));

// Student sign-up

// Create a form with first name, last name, birth year and academy
// Create a button for signing up
// The button should create a new Student object and add it in the array of students

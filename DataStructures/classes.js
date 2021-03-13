// example of classes

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName() {
    return `Your Full Name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "You are Expelled!!!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }

  static enrollStudents(...students) {
    // maybe send an email to all students
  }
}

let firstStudent = new Student("Jordan", "Pio");
let secondStudent = new Student("Sawako", "Goshima");

console.log(firstStudent.fullName()); // print the fullName
console.log(firstStudent); // print the object
console.log(firstStudent.firstName); // print the firstName

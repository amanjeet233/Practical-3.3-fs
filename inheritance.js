// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Subclass 1: Student
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // call parent constructor
    this.course = course;
  }

  // Override the displayInfo() method
  displayInfo() {
    console.log(
      `Student Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`
    );
  }
}

// Subclass 2: Teacher
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); // call parent constructor
    this.subject = subject;
  }

  // Override the displayInfo() method
  displayInfo() {
    console.log(
      `Teacher Name: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`
    );
  }
}

// Creating instances
const student1 = new Student("Amanjeet Kumar", 20, "Computer Science");
const teacher1 = new Teacher("Ankita Sharma", 32, "Java Programming");

// Calling methods
student1.displayInfo();
teacher1.displayInfo();

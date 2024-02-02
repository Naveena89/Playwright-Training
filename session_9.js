//Animal and Bird Classes
// class Animal {
//   eat() {
//     console.log("Animal is eating");
//   }
//     sleep() {
//     console.log("Animal is sleeping");
//   }
// }

// class Bird extends Animal {
//   fly() {
//     console.log("Bird is flying");
//   }
//   eat() {
//     console.log("Bird is eating");
//   }
//   sleep() {
//     console.log("Bird is sleeping");
//   }
// }

// const animal = new Animal();
// animal.eat(); 
// animal.sleep(); 

// const bird = new Bird();
// bird.eat(); 
// bird.sleep(); 
// bird.fly(); 







//Person superclass and Student Subclass
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  }
  
  class Teacher extends Person {
    constructor(name, age, salary, subject) {
      super(name, age);
      this.salary = salary;
      this.subject = subject;
    }
  }
  
  class CollegeStudent extends Student {
    constructor(name, age, grade, year, major) {
      super(name, age, grade);
      this.year = year;
      this.major = major;
    }
  }
  
  const student = new Student("John Doe", 17, 11);
  const teacher = new Teacher("Jane Smith", 35, 50000, "Computer Science");
  const collegeStudent = new CollegeStudent("Alice Johnson", 20, 13, 2, "Electrical Engineering");
  
  console.log(student); 
  console.log(teacher); 
  console.log(collegeStudent); 
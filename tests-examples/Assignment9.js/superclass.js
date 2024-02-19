class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }}
  
  class Student extends Person {
    constructor(name, age, gender, studentId) {
      super(name, age, gender);
      this.studentId = studentId;
    }}
  
  
  class Teacher extends Person {
    constructor(name, age, gender, salary, subject) {
      super(name, age, gender);
      this.salary = salary;
      this.subject = subject;
    }}
  
  
  class CollegeStudent extends Student {
    constructor(name, age, gender, studentId, year, major) {
      super(name, age, gender, studentId);
      this.year = year;
      this.major = major;
    }}
  
  
  const teacher = new Teacher("Tanjiro", 35, "Male", 50000, "Computer Science");
  const collegeStudent = new CollegeStudent("Naveena", 20, "Female", "501", 2, "Electrical Engineering");
  
  console.log(teacher);
  console.log(collegeStudent);
//Animal and Bird Classes
class Animal {
  eat() {
    console.log("Animal is eating");
  }
    sleep() {
    console.log("Animal is sleeping");
  }
}

class Bird extends Animal {
  fly() {
    console.log("Bird is flying");
  }
  eat() {
    console.log("Bird is eating");
  }
  sleep() {
    console.log("Bird is sleeping");
  }
}

const animal = new Animal();
animal.eat(); 
animal.sleep(); 

const bird = new Bird();
bird.eat(); 
bird.sleep(); 
bird.fly(); 

var Dog = require("./dog.js");

class Person {
  constructor(name, dogDetails) {
    //properties
    this.name = name;
    this.dog = undefined || dogDetails;
  }
  //methods
  fillFoodBowl() {
    this.dog.hungry = false;
  }
  throwBall() {
    this.dog.energyLevel--;
    if (this.dog.energyLevel >= 3) {
      return `${this.dog.name} loves playing fetch!`;
    } else {
      return `Oh, I think ${this.dog.name} is too tired. I guess we won\'t play fetch right now.`
    }
  }
  adoptAPup(pup, pupAge) {
    if (!this.dog) {
      var dog = new Dog({ name: pup, age: pupAge})
      this.dog = dog;
    } else {
     return  `You can\'t adopt ${pup}. You already have ${this.dog.name}!`
    }

  }
}


  module.exports = Person;

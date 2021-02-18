class Vampire {
    constructor(name, pet= "bat", thirsty=true){
  this.name = name;
  this.pet = pet;
  this.thirsty = thirsty;
  }

  drink() {
    this.thirsty = false;
  }

}

module.exports = Vampire;
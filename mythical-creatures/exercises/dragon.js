class Dragon {
  constructor(name, rider, color, hungry, meals){
  this.name = name;
  this.rider = rider;
  this.color = color;
  this.hungry = hungry || true
  this.meals = 0;
  }

  eat() {
   this.meals += 1
   if (this.meals >=3) {
     this.hungry = false;
   }
  }
}

module.exports = Dragon;
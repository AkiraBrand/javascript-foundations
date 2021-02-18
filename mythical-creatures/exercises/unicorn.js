class Unicorn {
  constructor(name, color="white") {
    this.name = name;
    this.color = color;
  }

  isWhite() {
    if(this.color != "white"){return false}
  }

  says(phrase) {
    return `**;* ${phrase} *;**`
  }
}

module.exports = Unicorn;

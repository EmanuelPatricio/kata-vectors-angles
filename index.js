'use strict'

module.exports = class Vector {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  magnitude() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }

  dotProduct(otherVector) {
    return (this.x * otherVector.x) + (this.y * otherVector.y);
  }
}

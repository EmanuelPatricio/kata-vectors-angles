const { it, expect } = require('@jest/globals');
const Vector = require('./index');

describe('Vector', () => {
  const vector = new Vector(3, 4);
  const vectorB = new Vector(1, 2);

  it('magnitude() method returns a float number', () => {
    expect(vector.magnitude()).toBe(5);
  });

  it('dotProduct() method returns a float number', () => {
    expect(vector.dotProduct(vectorB)).toBe(11);
  });

  it('angleBetween() method returns a float number', () => {
    expect(vector.angleBetween(vectorB)).toBe(10.304846468766044);
  });
});

const { it, expect } = require('@jest/globals');
const Vector = require('./index');

describe('Vector', () => {
  const vector = new Vector(3, 4);

  it('magnitude() method returns a float number', () => {
    expect(vector.magnitude()).toBe(5);
  });
});

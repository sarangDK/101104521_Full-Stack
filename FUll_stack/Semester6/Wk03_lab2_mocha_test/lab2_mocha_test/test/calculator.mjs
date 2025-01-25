import { expect } from 'chai';
import calculator from '../app/calculator.js';

describe('Calculator Tests', () => {
  // Test cases for add function
  it('add(5, 2) expected result 7 PASS', () => {
    expect(calculator.add(5, 2)).to.equal(7);
  });

  it('add(5, 2) expected result 7 FAIL', () => {
    expect(calculator.add(5, 2)).to.equal(8);
  });

  // Test cases for sub function
  it('sub(5, 2) expected result 3 PASS', () => {
    expect(calculator.sub(5, 2)).to.equal(3);
  });

  it('sub(5, 2) expected result 3 FAIL', () => {
    expect(calculator.sub(5, 2)).to.equal(5);
  });

  // Test cases for mul function
  it('mul(5, 2) expected result 10 PASS', () => {
    expect(calculator.mul(5, 2)).to.equal(10);
  });

  it('mul(5, 2) expected result 10 FAIL', () => {
    expect(calculator.mul(5, 2)).to.equal(12);
  });

  // Test cases for div function
  it('div(10, 2) expected result 5 PASS', () => {
    expect(calculator.div(10, 2)).to.equal(5);
  });

  it('div(10, 2) expected result 5 FAIL', () => {
    expect(calculator.div(10, 2)).to.equal(2);
  });
});
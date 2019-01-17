describe("Player", function() {
  const Calculator = require('./lib/Calculator.js')
  const calc = new Calculator();

  it("should add two numbers", () => {
    expect(calc.add(5,5)).toEqual(10)
    expect(calc.add(5,1)).toEqual(6)
  });
});

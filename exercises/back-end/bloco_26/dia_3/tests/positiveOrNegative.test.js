const { expect } = require("chai");
const positiveOrNegative = require("../functions/positiveOrNegative");

describe("Testing positive or negative function", () => {
  it('When passed a that number is over than 0, should return "positivo"', () => {
    const response = positiveOrNegative(2);

    expect(response).to.be.a("string");
    expect(response).to.be.equal("positivo");
  });

  it('When passed a number that is lower than 0, should return "negativo"', () => {
    const response = positiveOrNegative(-1);

    expect(response).to.be.a("string");
    expect(response).to.be.equal("negativo");
  });

  it('When passed a number that is 0, should return "neutro"', () => {
    const response = positiveOrNegative(0);

    expect(response).to.be.a("string");
    expect(response).to.be.equal("neutro");
  });
});

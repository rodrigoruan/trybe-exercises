const { expect } = require("chai");
const positiveOrNegative = require("../functions/positiveOrNegative");

describe("Testing positive or negative function", () => {
  it('When the passed number is over than 0, should return "positivo"', () => {
    const response = positiveOrNegative(2);

    expect(response).to.be.equal("positivo");
  });
});

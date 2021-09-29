const { expect } = require("chai");
const saveFile = require("../functions/saveFile");

describe("Testing write function", () => {
  it("Function should receive two param, name and content, and return ok", () => {
    const response = saveFile("dasdas", "balão");
    expect(response).to.be.equal("ok");
  });

  it("When function doesnt receive two param, should return 'Erro'", () => {
    const response = saveFile("VALAR MOGULHOS");

    expect(response).to.be.equal("Erro");
  });
});

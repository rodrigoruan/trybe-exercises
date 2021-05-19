const func = require('./hydrate');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(func.hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof func.hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(func.hydrate('1 cerveja')).toBe('1 copo de água');
    expect(func.hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe(
      '7 copos de água'
    );
    expect(func.hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe(
      '5 copos de água'
    );
    expect(func.hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe(
      '3 copos de água'
    );
    expect(func.hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

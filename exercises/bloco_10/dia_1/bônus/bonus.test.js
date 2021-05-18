const func = require('./bonus');



describe('Testa a função searchEmployee', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(func.searchEmployee).toBeDefined();
  });
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof func.searchEmployee).toBe('function');
  });
  it('Retorna as informações corretas', () => {
    expect(func.searchEmployee('4678-2', 'firstName')).toBe('Paul');
    expect(func.searchEmployee('9852-2-2', 'firstName')).toBe('Jeff');
    expect(func.searchEmployee('1256-4', 'lastName')).toBe('Bezos');
    expect(func.searchEmployee('4456-4', 'specialities')).toEqual(['Context API', 'RTL', 'Bootstrap']);
    expect(() => {func.searchEmployee('xablau', 'lastName')}).toThrow()
    expect(() => {func.searchEmployee('xablau', 'firstName')}).toThrow(new Error('ID não identificada'))
    expect(() => {func.searchEmployee('4678-2', 'xablau')}).toThrow();
    expect(() => {func.searchEmployee('4678-2', 'xablau')}).toThrow(new Error('Informação indisponível'));
  });
});

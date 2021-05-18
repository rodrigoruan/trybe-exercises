const encode = (str) => {
  const objEncode = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  return str.replace(/[aeiou]/g, (value) => objEncode[value]);
};

const decode = (str) => {
  const objDecode = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  return str.replace(/[12345]/g, (value) => objDecode[value]);
};

module.exports = { encode, decode };

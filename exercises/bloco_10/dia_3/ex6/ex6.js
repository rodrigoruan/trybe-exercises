const fetchApi = async () => {
  return await fetch('https://dog.ceo/api/breeds/image/random').then(r => r.json().then(json => r.ok ? Promise.resolve(json) : Promise.reject(json)));
};

module.exports = fetchApi
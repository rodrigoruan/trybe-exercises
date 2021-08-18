const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  let temp = Math.random() * 5000;
  setTimeout(() => console.log(getMarsTemperature()), temp);
};

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

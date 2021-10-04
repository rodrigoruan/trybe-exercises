/* index.js */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/user/register", (req, res) => {
  const { username, email, password } = req.body;

  if (
    username.length <= 3 ||
    !/\w+@\w+.com/.test(email) ||
    password.length < 4 ||
    password.length > 8
  ) {
    res.status(400).json({ message: "invalid data" });
  }

  res.status(200).json({ message: "user created" });
});

app.listen(3001, () => {
  console.log("Ouvindo na porta 3001");
});

const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const { validateNewUser } = require("./validate-middleware");

const app = express();
app.use(bodyParser.json());

app.post("/user/register", validateNewUser, (_req, res) => {
  res.status(200).json({ message: "user created" });
});

app.post("/user/login", (req, res) => {
  const { email, password } = req.body;
  const token = crypto.randomBytes(8).toString("hex");

  if (
    !/^\w+@\w+.com$/.test(email) ||
    password.length < 4 ||
    password.length > 8
  ) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }

  res.status(200).json({ token });
});

app.listen(3001, () => {
  console.log("Ouvindo na porta 3001");
});

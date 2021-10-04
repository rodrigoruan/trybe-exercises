const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const userRouter = require("./userRoutes");

// app.use("/user", userRouter);

app.get("/btc", async (req, res) => {
  const token = req.headers.authorization;

  if (token.length !== 12 || /^[^A-Za-z\d]{12}$/.test(token)) {
    return res.status(400).json({ message: "invalid token" });
  }

  const json = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
  );
  res.status(200).json(json.data);
});

app.listen(3001, () => {
  console.log("Ouvindo na porta 3001");
});
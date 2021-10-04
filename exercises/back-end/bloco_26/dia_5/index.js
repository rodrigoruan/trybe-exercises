const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const userRouter = require("./userRoutes");

app.use("/user", userRouter);

app.listen(3001, () => {
  console.log("Ouvindo na porta 3001");
});

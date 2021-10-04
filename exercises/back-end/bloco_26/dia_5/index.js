const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// const userRouter = require("./userRoutes");

// app.use("/user", userRouter);

// app.get("/btc", async (req, res) => {
//   const token = req.headers.authorization;

//   if (token.length !== 12 || /^[^A-Za-z\d]{12}$/.test(token)) {
//     return res.status(400).json({ message: "invalid token" });
//   }

//   const json = await axios.get(
//     "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
//   );
//   res.status(200).json(json.data);
// });

// const posts = [{ id: 1, name: "HELLO" }];

// app.get("/posts/:id", (req, res) => {
//   const { id } = req.params;

//   const filteredPost = posts.find((post) => post.id === Number(id));

//   if (!filteredPost) {
//     return res.status(400).json({ message: "post not found" });
//   }

//   res.status(200).json({ filteredPost });
// });

// app.get("/posts", (_req, res) => {
//   if (posts.length === 0) {
//     return res.status(200).json({ posts: [] });
//   }

//   res.status(200).json(posts);
// });

// app.use((_req, res, _next) => {
//   res.status(404).json({ message: "Opsss, route not found" });
// });

app.post("/teams", (req, res) => {
  const { name, initials, country, league } = req.body;

  if (name < 5 || !/[A-Z]{1,3}/.test(initials) || country.length < 3) {
    return res.status(400).json({ message: "invalid data" });
  }

  const infos = JSON.stringify({ name, initials, country, league });

  fs.writeFileSync(
    `/home/rodrigo/Documents/trybe-exercises/exercises/back-end/bloco_26/dia_5/teams.json`,
    infos
  );

  res.status(200).json(infos);
});

app.get("/teams", (_req, res) => {
  const file = fs.readFileSync("./teams.json", "utf-8");

  if (!file) return res.status(200).json({ teams: [] });

  res.status(200).json(JSON.parse(file));
});

app.listen(3001, () => {
  console.log("Ouvindo na porta 3001");
});

/* index.js */
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const randomToken = require("random-token");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

// //  fixation

// const recipes = [
//   { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
//   { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
//   { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
// ];

// app.get("/recipes", (_req, res) => {
//   res.json(recipes);
// });

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});

// const drinks = [
//   { id: 1, name: "Refrigerante Lata", price: 5.0 },
//   { id: 2, name: "Refrigerante 600ml", price: 8.0 },
//   { id: 3, name: "Suco 300ml", price: 4.0 },
//   { id: 4, name: "Suco 1l", price: 10.0 },
//   { id: 5, name: "Cerveja Lata", price: 4.5 },
//   { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
// ];

// app.get("/drinks", (_req, res) => {
//   res.json(drinks);
// });

// app.get("/drinksAndRecipes", (_req, res) => {
//   res.json(
//     [...drinks, ...recipes].sort(
//       (a, b) => a.name.charCodeAt() - b.name.charCodeAt()
//     )
//   );
// });

// app.get("/drink/:id", (req, res) => {
//   const { id } = req.params;
//   const drink = drinks.find((r) => r.id === Number(id));

//   if (!drink) {
//     return res.status(404).json({ message: "Drink not found" });
//   }

//   return res.status(200).json(drink);
// });

// app.get("/recipes/search", function (req, res) {
//   const { name, maxPrice, minPrice } = req.query;
//   const filteredRecipes = recipes.filter(
//     (r) =>
//       r.name.includes(name) &&
//       r.price < parseInt(maxPrice) &&
//       r.price >= parseInt(minPrice)
//   );
//   res.status(200).json(filteredRecipes);
// });

// app.get("/drinks/search", (req, res) => {
//   const { name } = req.query;
//   const filteredDrinks = drinks.filter((el) => el.name.includes(name));

//   return res.status(200).json(filteredDrinks);
// });

// app.post("/recipes", function (req, res) {
//   const { id, name, price, waitTime } = req.body;
//   recipes.push({ id, name, price, waitTime });
//   res.status(201).json({ message: "Recipe created successfully!" });
// });

// app.post("/drinks", function (req, res) {
//   const { id, name, price } = req.body;
//   drinks.push({ id, name, price });
//   res.status(201).json({ message: "Drink created successfully!" });
// });

// app.put("/drinks/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, price } = req.body;
//   const drinkIndex = drinks.findIndex((r) => r.id === Number(id));

//   if (drinkIndex === -1) {
//     return res.status(404).json({ message: "Drink not found" });
//   }

//   drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

//   return res.status(204).end();
// });

// app.delete("/drinks/:id", (req, res) => {
//   const { id } = req.params;
//   const drinkIndex = drinks.findIndex((r) => r.id === Number(id));

//   if (drinkIndex === -1) {
//     return res.status(404).json({ message: "Drink not found" });
//   }

//   drinks.splice(drinkIndex, 1);

//   return res.status(204).end();
// });

// EXERCISES

app.get("/ping", (_req, res) => {
  return res.status(200).json({ message: "pong" });
});

app.post("/hello", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Please enter a name" });
  }

  return res.status(200).json({ message: `Hello, ${name}!` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;

  if (age > 17) {
    return res.status(200).json({ message: `Hello, ${name}!` });
  }

  return res.status(401).json({ message: `Unauthorized` });
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;

  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos` });
});

const simpsons = require("./simpsons.json");

app.get("/simpsons", (_req, res) => {
  fs.readFile("./simpsons.json", (_err, _data) => {
    return res.status(200).json(simpsons);
  });
});

app.get("/simpsons/:id", (req, res) => {
  const { id } = req.params;
  const simpson = simpsons.find((el) => +el.id === +id);

  fs.readFile("./simpsons.json", (_err, _data) => {
    if (!simpson) {
      return res.status(404).json({ message: "Simpson not found" });
    }
    return res.status(200).json(simpson);
  });
});

app.post("/simpsons", (req, res) => {
  const { id, name } = req.body;
  const simpson = simpsons.find((el) => +el.id === +id);

  if (simpson) {
    return res.status(409).json({ message: "Simpson already exists" });
  }

  fs.writeFile(
    "./simpsons.json",
    JSON.stringify([...simpsons, { id, name }]),
    (err) => {
      if (err) console.log(err);
      console.log("Sucess");
    }
  );

  return res.status(200).json({ message: "No content - 204" });
});

app.post("/signup", (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: "missing fields" });
  }

  const token = randomToken(16);

  return res.status(200).json({ token });
});

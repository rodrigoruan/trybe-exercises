/* index.js */
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

//  fixation

const recipes = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
];

app.get("/recipes", (_req, res) => {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

app.get("/drinks", (_req, res) => {
  res.json(drinks);
});

app.get("/drinksAndRecipes", (_req, res) => {
  res.json(
    [...drinks, ...recipes].sort(
      (a, b) => a.name.charCodeAt() - b.name.charCodeAt()
    )
  );
});

app.get("/drink/:id", (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === Number(id));

  if (!drink) {
    return res.status(404).json({ message: "Drink not found" });
  }

  return res.status(200).json(drink);
});

app.get("/recipes/search", function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) =>
      r.name.includes(name) &&
      r.price < parseInt(maxPrice) &&
      r.price >= parseInt(minPrice)
  );
  res.status(200).json(filteredRecipes);
});

app.get("/drinks/search", (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((el) => el.name.includes(name));

  return res.status(200).json(filteredDrinks);
});

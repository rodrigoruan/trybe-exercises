const express = require("express");
const router = express.Router();
const crypto = require("crypto");

const { validateNewUser, validateLoginUser } = require("./validate-middleware");

router.post("/register", validateNewUser, (_req, res) => {
  res.status(200).json({ message: "user created" });
});

router.post("/login", validateLoginUser, (req, res) => {
  const token = crypto.randomBytes(8).toString("hex");
  res.status(200).json({ token });
});

module.exports = router;

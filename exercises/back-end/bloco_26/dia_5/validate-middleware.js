const validateNewUser = (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    username <= 3 ||
    !/\w+@\w+.com/.test(email) ||
    password.length < 4 ||
    password.length > 8
  ) {
    return res.status(400).json({ message: "invalid data" });
  }

  next();
};

module.exports = {validateNewUser};

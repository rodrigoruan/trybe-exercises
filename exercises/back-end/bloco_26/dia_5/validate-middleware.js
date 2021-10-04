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

const validateLoginUser = (req, res, next) => {
  const { email, password } = req.body;

  if (
    !/\w+@\w+.com/.test(email) ||
    password.length < 4 ||
    password.length > 8
  ) {
    return res.status(400).json({ message: "email or password is incorrect" });
  }

  next();
};

module.exports = { validateNewUser, validateLoginUser };

import userDatabase from "../../Database";
import jwt from "jsonwebtoken";

const login = (req, res, next) => {
  const { email, password } = req.body;

  const userInfo = userDatabase.filter((item) => item.email === email);

  console.log(userInfo);
  next();
};

const accessToken = (req, res) => {};

const refreshToken = (req, res) => {};

const loginSuccess = (req, res) => {};

const logout = (req, res) => {};

module.exports = {
  login,
  accessToken,
  refreshToken,
  loginSuccess,
  logout,
};

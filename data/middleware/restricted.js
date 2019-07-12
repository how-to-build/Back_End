const bcrypt = require("bcrypt");
const db = require("../model/usersModel");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const { token } = req.headers;

  try {
    const decriptToken = jwt.verify(token, jwtSecret);
    req.token = decriptToken;
    next();
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
};

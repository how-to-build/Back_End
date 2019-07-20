const express = require("express");
const db = require("../../data/model/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const router = express.Router();

router.post("/", async (req, res) => {
  const credentials = req.body;

  try {
    if (credentials.email && credentials.password) {
      const user = await db.findByEmail(credentials.email);
      const comparePass = await bcrypt.compareSync(
        credentials.password,
        user.password
      );

      if (user && comparePass) {
        const token = await generateToken(user);
        res.json({
          message: "You have a token",
          token,
          username: user.username
        });
      } else {
        res.status(403).json({
          message: "invalid credentials"
        });
      }
    } else {
      res.status(403).json({ message: "Please provide credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server error" });
  }

  function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username
    };

    const options = {
      expiresIn: "10h"
    };

    return jwt.sign(payload, jwtSecret, options);
  }
});

module.exports = router;

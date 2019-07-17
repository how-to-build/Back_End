const express = require("express");
const router = express.Router();
const db = require("../../data/model/usersModel");

router.get("/", async (req, res) => {
  try {
    const allUsers = await db.find();
    if (allUsers) {
      for (let user in allUsers) {
        allUsers[user].password = "";
      }
      res.json({ message: "List of users", allUsers });
    } else {
      res.status(404).json({ message: "No users found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.get("/byID/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.findById(id);
    user.password = "";
    if (user) {
      res.json({ message: `User with id ${id}`, user });
    } else {
      res
        .status(404)
        .json({ message: `No user found with id: ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await db.findByUsername(username);
    user.password = "";
    if (user) {
      res.json({ message: `User with username ${username}`, user });
    } else {
      res
        .status(404)
        .json({ message: `No user found with username: ${username}` });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.post("/", async (req, res) => {
  const user = req.body;

  try {
    const newUser = await db.add(user);
    if (newUser) {
      res.json({
        message: `User: ${user.username} added successfully`,
        newUser
      });
    } else {
      res.status(403).json({ message: "Bad request" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.put("/:id", async (req, res) => {
  const user = req.body;
  const { id } = req.params;
  try {
    if (user.username) {
      const userExists = await db.findByUser(user.username);
      if (userExists) {
        res.status(409).json({ message: "conflict, user exists" });
      }
    }
    const [updatedUser] = await db.update(id, user);
    if (updatedUser) {
      res.json({ message: `Updated user: ${updatedUser.username}` });
    } else {
      res.status(403).json({ message: "Bad request" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.remove(id);
    if (user) {
      res.json({ message: `User with id: ${id} removed` });
    } else {
      res.status(403).json({ message: `Bad request` });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = router;

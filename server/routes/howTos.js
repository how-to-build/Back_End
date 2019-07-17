const express = require("express");
const router = express.Router();
const db = require("../../data/model/howToModel");
const usersdb = require("../../data/model/usersModel");
const restricted = require("../../data/middleware/restricted");

router.get("/", async (req, res) => {
  try {
    const allHowTos = await db.find();
    if (allHowTos) {
      res.json({ message: "List of how tos", allHowTos });
    } else {
      res.status(404).json({ message: "No how tos found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.get("/all/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const howTos = await db.findAllDataById(id);
    if (howTos) {
      res.json({ message: `How tos with id of ${id}`, howTos });
    } else {
      res.status(404).json({ message: "No howTos found with that id" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.get("/:id", restricted, async (req, res) => {
  const { id } = req.params;

  try {
    const howTos = await db.findById(id);
    if (howTos) {
      res.json({ message: `How tos with id of ${id}`, howTos });
    } else {
      res.status(404).json({ message: "No howTos found with that id" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.post("/", restricted, async (req, res) => {
  // { id, title, description, likes, user_id }
  const howTo = req.body;

  try {
    const { id } = await usersdb.findByUsername(req.token.username);
    const addedHowTo = await db.add({ ...howTo, user_id: id });
    res.json({ message: "added how to", addedHowTo });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error });
  }
});

router.put("/:id", restricted, async (req, res) => {
  const { id } = req.params;
  const howTo = req.body;

  try {
    const updatedHowTo = await db.update(id, howTo);
    if (updatedHowTo) {
      res.json({ message: `Updated how to` });
    } else {
      res.status(403).json({ message: "Bad request" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.delete("/:id", restricted, async (req, res) => {
  const { id } = req.params;

  try {
    const howTo = await db.remove(id);
    if (howTo) {
      res.json({ message: `How to removed with id ${id}` });
    } else {
      res.status(403).json({ message: `Bad request` });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = router;

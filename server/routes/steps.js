const express = require("express");
const router = express.Router();
const db = require("../../data/model/stepsModel");

router.get("/", async (req, res) => {
  const { username } = req.params;
  try {
    const allSteps = await db.find();
    if (allSteps) {
      res.json({ message: "List of steps", allSteps });
    } else {
      res.status(404).json({ message: "No steps found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const step = await db.findById(id);
    if (step) {
      res.json({ message: `Step with id of ${id}`, step });
    } else {
      res.status(404).json({ message: "No step found with that id" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.post("/", async (req, res) => {
  const { steps, howtoId } = req.body;
  try {
    const newStep = await db.add(howtoId, steps);
    if (newStep) {
      res.json({ message: `Step added successfully`, newStep });
    } else {
      res.status(403).json({ message: "Bad request" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.put("/:id", async (req, res) => {
  const step = req.body;
  const { id } = req.params;
  try {
    const updatedStep = await db.update(id, step);
    if (updatedStep) {
      res.json({ message: `Updated step` });
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
    const step = await db.remove(id);
    if (step) {
      res.json({ message: `Step removed` });
    } else {
      res.status(403).json({ message: `Bad request` });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = router;

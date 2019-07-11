const express = require("express");
const router = express.Router()
const db = require('../../data/model/keyPointsModel')

router.get('/', async (req, res) => {
    try {
        const allKeyPoints = await db.find()
        if (allKeyPoints) {
            res.json({ message: "List of key points" }, allKeyPoints)
        } else {
            res.status(404).json({ message: "No key points found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const keyPoints = await db.findById(id)
        if (keyPoints) {
            res.json({ message: `Key points with id of ${id}` }, keyPoints)
        } else {
            res.status(404).json({ message: "No keyPoints found with that id" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})


router.post('/', async (req, res) => {
    const keyPoint = req.body
    try {
        const newKeyPoint = await db.add(keyPoint)
        if (newKeyPoint) {
            res.json({ message: `Key point added successfully` }, newKeyPoint)
        } else {
            res.status(403).json({ message: "Bad request" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

router.put('/', async (req, res) => {
    const { keyPoint } = req.body
    try {
        const updatedKeyPoint = await db.update(keyPoint)
        if (updatedKeyPoint) {
            res.json({ message: `Updated key point` })
        } else {
            res.status(403).json({ message: "Bad request" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const keyPoint = await db.remove(id)
        if (keyPoint) {
            res.json({ message: `Key point removed` })
        } else {
            res.status(403).json({ message: `Bad request` })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

module.exports = router;

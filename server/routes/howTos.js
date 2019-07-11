const express = require("express");
const router = express.Router()
const db = require('../../data/model/howToModel')

router.get('/', async (req, res) => {
    try {
        const allHowTos = await db.find()
        if (allHowTos) {
            res.json({ message: "List of how tos" }, allHowTos)
        } else {
            res.status(404).json({ message: "No how tos found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    try {
        const howTos = await db.findById(id)
        if (howTos) {
            res.json({ message: `How tos with id of ${id}` }, howTos)
        } else {
            res.status(404).json({ message: "No howTos found with that id" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})


router.post('/', (req, res) => {
    const howTo = req.body
    try {
        const newHowTo = await db.add(howTo)
        if (newHowTo) {
            res.json({ message: `Key point added successfully` }, newHowTo)
        } else {
            res.status(403).json({ message: "Bad request" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

router.put('/', (req, res) => {
    const { howTo } = req.body
    try {
        const updatedHowTo = await db.update(howTo)
        if (updatedHowTo) {
            res.json({ message: `Updated how to` })
        } else {
            res.status(403).json({ message: "Bad request" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    try {
        const howTo = await db.remove(id)
        if (howTo) {
            res.json({ message: `How to removed` })
        } else {
            res.status(403).json({ message: `Bad request` })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

module.exports = router;

const express = require("express");
const router = express.Router()
const db = require('../../data/model/repliesModel')

router.get('/', async (req, res) => {
    try {
        const allReplies = await db.find()
        if (allReplies) {
            res.json({ message: "List of replies" }, allReplies)
        } else {
            res.status(404).json({ message: "No replies found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const reply = await db.findById(id)
        if (reply) {
            res.json({ message: `Reply with id of ${id}` }, reply)
        } else {
            res.status(404).json({ message: "No reply found with that id" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})


router.post('/', async (req, res) => {
    const reply = req.body
    try {
        const newReply = await db.add(reply)
        if (newReply) {
            res.json({ message: `Reply added successfully` }, newReply)
        } else {
            res.status(403).json({ message: "Bad request" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

router.put('/', async (req, res) => {
    const { reply } = req.body
    try {
        const updatedReply = await db.update(reply)
        if (updatedReply) {
            res.json({ message: `Updated reply` })
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
        const reply = await db.remove(id)
        if (reply) {
            res.json({ message: `Reply removed` })
        } else {
            res.status(403).json({ message: `Bad request` })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

module.exports = router;

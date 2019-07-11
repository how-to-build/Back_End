const express = require("express");
const router = express.Router()
const db = require('../../data/model/commentsModel')

router.get('/', async (req, res) => {
    try {
        const allComments = await db.find()
        if (allComments) {
            res.json({ message: "List of comments" }, allComments)
        } else {
            res.status(404).json({ message: "No comments found" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    try {
        const comment = await db.findById(id)
        if (comment) {
            res.json({ message: `Comment with id of ${id}` }, comment)
        } else {
            res.status(404).json({ message: "No comment found with that id" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})


router.post('/', (req, res) => {
    const comment = req.body
    try {
        const newComment = await db.add(comment)
        if (newComment) {
            res.json({ message: `Comment added successfully` }, newComment)
        } else {
            res.status(403).json({ message: "Bad request" })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

router.put('/', (req, res) => {
    const { comment } = req.body
    try {
        const updatedComment = await db.update(comment)
        if (updatedComment) {
            res.json({ message: `Updated comment` })
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
        const comment = await db.remove(id)
        if (comment) {
            res.json({ message: `Comment removed` })
        } else {
            res.status(403).json({ message: `Bad request` })
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" }, error)
    }
})

module.exports = router;

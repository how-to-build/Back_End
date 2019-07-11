const express = require('express')
const db = require('../../data/model/usersModel')
const router = express.Router()

router.post('/', async (req, res) => {
    const credentials = req.headers

    try {
        if (credentials.username && credentials.password) {
            const hash = bcrypt.hash(credentials.password, 14)
            hash = credentials.password
            const user = await db.add(credentials)
            if (user) {
                res.json({ message: 'Successfully added'}, user)
            } else {
                res.status(403).json({ message: 'There was a problem adding user'}, user)
            }
           
        } else {
            res.status(403).json({ message: 'Please provide credentials'})
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server error'}, error)
    }
})

module.exports = router
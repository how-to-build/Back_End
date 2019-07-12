const express = require('express')
const db = require('../../data/model/usersModel')
const bcrypt = require('bcrypt')
const router = express.Router()

router.post('/', async (req, res) => {
    const credentials = req.body
    console.log('Cred:', credentials)

    try {
        if (credentials.username && credentials.password) {
            const hash = await bcrypt.hashSync(credentials.password, 14)
            console.log('Hash:', hash)
            credentials.password = hash
            const user = await db.add(credentials)
            console.log('********User:', user)
            if (user) {
                res.status(200).json({ message: 'Successfully added' })
            } else {
                res.status(403).json({
                    message: 'There was a problem adding user'
                })
            }
        } else {
            res.status(403).json({ message: 'Please provide credentials' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server error' })
    }
})

module.exports = router
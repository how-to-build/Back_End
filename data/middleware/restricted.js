const bcrypt = require('bcrypt')
const db = require('../model/usersModel')

module.exports = async (req, res, next) => {
    const { username, password } = req.headers

   try {
       if (username && password) {
           const user = await db.findByUser({ username })
            if ( user && bcrypt.compareSync(password, user.password)) {
                next()
            } else {
                res.status(401).json({message: 'Invalid Credentials '})
            }
       } else {
           res.status(400).json({ message: 'No credentials provided'})
       }
   } catch (error) {
       res.status(500).json({ message: 'Internal server error'}, error)
   }
}
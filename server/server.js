const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const usersRoutes = require('./routes/users')
const stepsRoutes = require('./routes/steps')
const repliesRoutes = require('./routes/replies')
const keyPointsRoutes = require('./routes/keyPoints')
const howTosRoutes = require('./routes/howTos')
const commentsRoutes = require('./routes/comments')
const loginRoutes = require('./routes/login')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
// server.use('/api/users', usersRoutes)
// server.use('/api/steps', stepsRoutes)
// server.use('/api/replies', repliesRoutes)
// server.use('/api/keyPoints', keyPointsRoutes)
// server.use('/api/howTos', howTosRoutes)
// server.use('/api/comments', commentsRoutes)
server.use('/api/login', loginRoutes)

server.get('/', (req, res) => {
    res.json({ message: 'You reached the api'})
})

module.exports = server
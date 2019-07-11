const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const usersRoutes = require('./routes/users')
const stepsRoutes = require('./routes/steps')
const repliesRoutes = require('./routes/replies')
const keyPointsRoutes = require('./routes/keyPoints')
const howTosRoutes = require('./routes/howTos')
const commentsRoutes = require('./routes/comments')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/users', usersRoutes)
server.use('/steps', stepsRoutes)
server.use('/replies', repliesRoutes)
server.use('/keypoints', keyPointsRoutes)
server.use('/howTos', howTosRoutes)
server.use('/comments', commentsRoutes)

server.get('/', (req, res) => {
    res.json({ message: 'You reached the api'})
})

module.exports = server
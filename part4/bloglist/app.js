const config = require('./utils/config')
const logger = require('./utils/logger')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')

mongoose.connect(config.MONGODB_URI)
	.then(() => {
		logger.info('Connected to MongoDB')
	})

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogsRouter)

module.exports = app
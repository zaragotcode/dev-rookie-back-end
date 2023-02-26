require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const formData = require('express-form-data')

const profilesRouter = require('./routes/profiles.js')
const authRouter = require('./routes/auth.js')
const jobsRouter = require('./routes/jobs.js')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(formData.parse())

app.use('/profiles', profilesRouter)
app.use('/auth', authRouter)
app.use('/jobs', jobsRouter)

app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

module.exports = app

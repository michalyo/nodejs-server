const express = require('express')
const router = express.Router()

const middlwareRouter = require('../middleware/authMiddleware')

const registerRouter = require('./userSystem/register')
const loginRouter = require('./userSystem/login')
const findUserRouter = require('./userSystem/find')

router.use('/register', registerRouter)
router.use('/login', loginRouter)
router.use('/find', middlwareRouter, findUserRouter)

module.exports = router
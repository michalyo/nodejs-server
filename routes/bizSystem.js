const express = require('express')
const router = express.Router()

const newCardsRoute = require('./bizSystem/newCard')
const findCardRoute = require('./bizSystem/findCard')
const arrRoute = require('./bizSystem/arr')

router.use('/new', newCardsRoute)
router.use('/find', findCardRoute)
router.use('/list', arrRoute)

module.exports = router
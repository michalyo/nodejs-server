const express = require('express')
const router = express.Router()

router.get('/', async (req,res)=>{
    console.log("Nice, you passed the middleware")
})

module.exports = router
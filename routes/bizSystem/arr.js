const express = require('express')
const router = express.Router()
const bizModel = require('../../model/bizModel')

router.get('/', async (req,res)=>{
    try {
        const userId = req.tokenData.id
        const result = await bizModel.findAllCardsByUserId(userId)
        if(result.length == 0){
            throw "you dont have any biz card"
        }
        res.json({ status: 200, msg: 'Found card', cards: result})
    } catch (err) {
        res.status(400).json({ status: 400, err:err })
    }
})

module.exports = router
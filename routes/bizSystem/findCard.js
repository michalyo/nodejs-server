const express = require('express')
const router = express.Router()
const bizModel = require('../../model/bizModel')

router.get('/:id', async (req,res)=>{
    try {
        const result = await bizModel.findCardById(req.params.id)
        res.json({ status: 200, msg: 'biz card found!', card: result})
    } catch (err) {
        res.status(400).json({ status: 400, msg: 'No biz card found with this id!'})
    }
})

module.exports = router
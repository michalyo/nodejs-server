const express = require('express')
const router = express.Router()
const bizModel = require('../../model/bizModel')
const UserModel = require('../../model/userModel')
const bizValidation = require('../../validation/bizValidation')

router.post('/', async (req,res)=>{
    try {
        const value = await bizValidation.bizSchema.validateAsync(req.body, { abortEarly: false })
        const findCard = await UserModel.findUserbyId(req.tokenData.id)
        const newCard = await bizModel.createCard({
            bizName: value.bizName,
            bizDescription: value.bizDescription,
            adress: findCard.adress,
            phoneNumber:value.phoneNumber,
            img:value.img
        })
        res.json({ status: 200, card: newCard})
    } catch (err) {
        res.status(400).json({ status: 400, err: err })
    }
})

module.exports = router
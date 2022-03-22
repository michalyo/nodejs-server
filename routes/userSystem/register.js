const express = require('express')
const router = express.Router()
const UserValidation = require('../../validation/userValidation')
const bcrypt = require('../../config/bcrypt')
const UserModel = require('../../model/userModel')

router.post('/', async (req,res)=>{
    try {    
        const ask = await UserValidation.registerSchema.validateAsync(req.body, { abortEarly: false })
        ask.password = await bcrypt.createHash(ask.password)
        const isEmailExistArr = await UserModel.findUserByEmail(ask.email)
        if(isEmailExistArr.length != 0){
            throw 'This email is already exists in our data'
        }
        else{
            await UserModel.createUser(ask.userName, ask.email, ask.password)
        }
        res.json({ 
            status: 200, msg: "All good!!!!!",
            response: ask
         })
    } catch (err) {
        res.status(400).json({ status: 400, err: err})
    }
})

module.exports = router
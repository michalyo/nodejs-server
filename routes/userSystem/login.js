const express = require('express')
const router = express.Router()
const UserVaidation = require('../../validation/userValidation')
const UsereModel = require('../../model/userModel')
const bcrypt = require('../../config/bcrypt')
const jwt = require('../../config/jwt')

router.post('/', async (req,res)=>{
    try {
        const value = await UserVaidation.loginSchema.validateAsync(req.body, { abortEarly: false })
        const userArr = await UsereModel.findUserByEmail(value.email)
        if(userArr.length != 0){
            const isPassOk = await bcrypt.compareHash(value.password, userArr[0].password)
            if(isPassOk === true){
                const token = await jwt.createToken({ id: userArr[0].id, biz: userArr[0].biz })
                res.json({ status: 200, msg: `Email and pass are ok, welcome back ${userArr[0].userName}`, token: token})
            }
            else{
                throw 'Wrong password'
            }
        }
        else{
            throw 'This email is not exists in our system'
        }
    } catch (err) {
        res.status(400).json({ status: 400, err:err})
    }
})

module.exports = router
const Joi = require('joi')

const loginSkeleton = {
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}}).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
}

const registerSekelton = {
    userName: Joi.string().alphanum().min(2).max(30).required(),
    ...loginSkeleton,
    biz: Joi.boolean()
}

const loginSchema = Joi.object(loginSkeleton)
const registerSchema = Joi.object(registerSekelton)

module.exports = {
    loginSchema,
    registerSchema
}
const Joi = require('joi')

const bizSkeleton = {
    bizName: Joi.string().min(2).max(50).required(),
    bizDescription: Joi.string().required(),
    adress: Joi.string().required(),
    phoneNumber: Joi.number().required(),
    img: Joi.string()
}

const bizSchema = Joi.object(bizSkeleton)

module.exports = {
    bizSchema
}
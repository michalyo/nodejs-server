const mongoose = require('mongoose')

const bizSchema = new mongoose.Schema({
    bizName:{
        type: String,
        required: true
    },
    bizDescription:{
        type: String,
        required: true,
    },
    adress:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    createdBy:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    img:{
        type: String,
        required: true
    }
})

const cards = mongoose.model('card', bizSchema)

const createCard = (bizName, bizDescription, adress, phoneNumber,img) =>{
    const newCard = new cards (bizName, bizDescription, adress, phoneNumber,img)
    return newCard.save()
}

const findCardById = cardId =>{
    return cards.findById(cardId)
}

const findAllCardsByUserId = userId =>{
    return cards.find({ adress: userId })
}

module.exports = {
    createCard,
    findCardById,
    findAllCardsByUserId
}
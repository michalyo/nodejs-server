const jwt = require('jsonwebtoken')

const createToken = data =>{
    return new Promise((res,rej)=>{
        jwt.sign(data, "fykcoi47cv78t67ecnbgvdf675", { expiresIn: '5d' } , (err,token)=>{
            if(err) rej(err)
            else res(token)
        })
    })
}

const verifyToken = token =>{
    return new Promise((res,rej)=>{
        jwt.verify(token, "fykcoi47cv78t67ecnbgvdf675", (err, decoded)=>{
            if(err) rej(err)
            else res(decoded)
        })
    })
}

module.exports = {
    createToken,
    verifyToken
}
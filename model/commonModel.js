const {models} = require("../model/definition")
const jwtSecret = require('../config.json')
const { token } = require("morgan")
const jwt = require('jsonwebtoken')

let refreshTokens=[]
function generatAccessToken(user){
    return jwt.sign(user,jwtSecret.jwt.secret,{expiresIn:'3000s'})
}
module.exports = {
    
    login:async function(body){
        let user =await models.User.findOne({
            where:{
                userName:body.userName
            }
        })
        user=user.dataValues;
        const accessToken=generatAccessToken(user)
        const token=jwt.sign(user,jwtSecret.jwt.secret)
        refreshTokens.push(token)
        return({accessToken:accessToken,refreshTokens:token})
    },
    logout: async function(body){
        refreshTokens = refreshTokens.filter(token => token !== body.token)
        return({refreshToken: refreshTokens})
    }
}

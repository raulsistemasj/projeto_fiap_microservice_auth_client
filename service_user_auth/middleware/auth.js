const jwt = require('jsonwebtoken');
const cfg = require('../config/config');

const auth = (req, res, next)=>{
    const webtoken = req.headers.token 
    
    if(!webtoken){
        return res.status(401).send({ output : `Acesso Negado`});
    }
    jwt.verify(webtoken, cfg.jwt_key,(erro, data)=>{
        
        if(erro){
            return res.status(401).send({output:`Falha no token ->${erro}`});
        }
        
        req.content = {
            id:data._id,
            user:data.user
        }

        return next();
    })
}

module.exports = auth;
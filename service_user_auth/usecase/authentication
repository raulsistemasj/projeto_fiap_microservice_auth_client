
const bcrypt = require("bcrypt");
const Usuario = require("../model/user");
const ManagerUser = require("../model/manageruser");
const create_webtoken = require("../utils/token");

//Importando nossa function de acesso a dados mongoose
const mongoose = require('../database/mongoose');

exports.logar = (req, res) => {

    const email = req.body.email
    const password = req.body.password

    Usuario.findOne({ email: email }, function (erro, data) {
      if (erro) return res.status(500).send('Ocorreu um erro inesperado no servidor.');
      if (!data) return res.status(404).send('Usuário não encontrato.');
      if (email != data.email) return res.status(401).send('Email ou senha invalida');

      bcrypt.compare(password,data.password,(erro, igual)=>{
        if (erro) return res.status(500).send('Ocorreu um erro inesperado no servidor.');
        if(!igual) return res.status(401).send({output:"Email ou senha invalida"});

        const token = create_webtoken(data._id, data.email);
        const info = new ManagerUser({userid:data._id,email:data.email,username:data.username,infologin:req.header});
        info.save();
        res.status(200).send({output:"Autenticado",payload:data,token:token});
      })
    });
}

const express = require('express');
const router = express.Router();
const cors = require("cors");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const Usuario = require("../model/user");
const Valid = require("../utils/valid");

//Importando nossa function de acesso a dados mongoose
var mongoose = require("../database/mongoose");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


    exports.registrar =  (req,res) =>{

        const email = req.body.email
        const data = new Usuario(req.body);

        if(!Valid.validaEmail(email)) return res.status(400).send("E-mail inválido")

        Usuario.findOne({email:email},(erro,ret)=>{
            if(erro) return res.status(500).send('Ocorreu um erro ao registrar o usuário.');
            if(ret) return res.status(400).send('Email já cadastrado'); 

            data.save().then((param)=>{
                res.status(201).send('Novo usuario cadastrado')
            }).catch((erro)=>res.status(500).send({erro:`Cadastro não realizado ${erro}`}))
        });
    }
    
    exports.consultar = (res)=>{

        Usuario.find((erro,usuario)=>{
            if(erro) return res.status(500).send('Ocorreu um erro ao consutar o usuário');
            res.json(usuario);
        }).select("-password");
    }

    exports.atualizar = (req,res)=>{

        console.log(req.body.password)

        if(req.body.password == undefined || Valid.isEmpty(req.body.password)) return res.status(400).send('Password é campo obrigatório!')
        if(req.body.id == undefined || Valid.isEmpty(req.body.id)) return res.status(400).send('Id é campo obrigatório!')

        req.body.password = bcrypt.hashSync(req.body.password, 8);
        Usuario.findByIdAndUpdate(req.body.id,req.body,{new:true},(erro,dados)=>{
            if(erro) return res.status(400).send('Erro ao atualizar')
            res.status(200).send("Atualizado com sucesso")
        }).select("-password")
    }



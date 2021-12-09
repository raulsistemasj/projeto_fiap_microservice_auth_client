const express = require('express');
const cors = require('cors');
const usuario = require('./usecase/usuario');
const authentication = require('./usecase/authentication');
const auth = require('./middleware/auth');
const config = require('./config/config');

const app = express();
const router = express.Router();

app.use(express.json());

app.use(cors());

// api de health check
router.get('/health', function(req, res){
    res.json({message:'success'});
});

// api do usuario
router.post('/usuario/cadastrar',(req,res)=>{
    usuario.registrar(req,res);
})

router.get('/usuario/',cors(config),auth,(req,res)=>{
    usuario.consultar(res);
})

router.put('/usuario/atualizar/senha',cors(config),auth,(req,res)=>{ 
     usuario.atualizar(req,res);
})

// api de login
router.post('/usuario/login',(req,res)=>{
    authentication.logar(req,res);
})

app.use('/api', router);


app.listen(4000,()=>console.log("Servidor online em http://localhost:4000"));
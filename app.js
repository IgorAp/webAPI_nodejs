global.db = require('./db');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000 //porta padrão
const router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//rota padrão
router.get('/',(req,res)=>{
    res.json({message:'Funcionando'});
});
app.use('/',router);

router.get('/clientes',(req,res)=>{
    global.db.findAll((err,clientes)=>{
        if(err) return console.log(err)
        res.json(clientes);
    });
});
router.get('/clientes/:id',(req,res)=>{
    global.db.findOne(req.params.id,(err,cliente)=>{
        if(err) return console.log(err);
        else res.json(cliente);
    });
});
router.post('/clientes',(req,res)=>{
    const cliente = req.body;
    global.db.insert(cliente,(err,result)=>{
        if(err) res.status(500).json(err);
        res.json({message:'Cliente cadastrado com sucesso!'});
    });
});

app.listen(port,()=>{
    console.log('api running');
})
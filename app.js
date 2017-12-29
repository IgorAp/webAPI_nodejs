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

app.listen(port,()=>{
    console.log('api running');
})
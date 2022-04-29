const express = require('express');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.listen(port, ()=>{
    console.log(`App running on port ${port}.`);
});

const pontoController = require('./controllers/PontoController');

app.post('/addPonto', pontoController.addPonto);

app.get('/', pontoController.sincronizar);
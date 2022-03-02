const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.post('/cadastrar', (req, res) => {
    /*
    const { nome } = req.body;
    const { sobrenome } = req.body;
    const { cpf } = req.body;
    const { email } = req.body;
    const { senha } = req.body;

    console.log(nome);
    console.log(sobrenome);
    console.log(cpf);
    console.log(email);
    console.log(senha);
    */
    (async () => {
        const db = require('./db');
        const Cliente = require('./model/Cliente');
        await db.sync();

        const novoCliente = await Cliente.create({ //o create é faz uma operação no banco de dados e ela é assincrona por isso usamos o await
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            cpf: req.body.cpf,
            email: req.body.email,
            senha: req.body.senha
        })

    })();

})

app.get('/', (req, res) => {
    res.send("Hello world");
})


app.listen(3001, () => {
    console.log("Server running...")
   })
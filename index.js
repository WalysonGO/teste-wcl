const express = require('express');
const app = express();
const axios = require('axios')
const port = 8090;

// req = Require = é o que o usuario manda para o servidor
// res = Response = é a resposta do servidor
app.use(express.json());

app.get('/', (req, res) => {
    res.send("<h1>Hello World! =)</h1>")
})

app.post('/:cep', async(req, res) => {
    const { cep }  = req.params;
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const dataResult = {
        data
    }
    return res.send(dataResult);
})

app.post('/', async(req, res) => {
    const { cep }  = req.body;
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const dataResult = {
        data
    }
    return res.send(dataResult);
})


// arrow function () => {}
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log("Este servidor está rodando na porta: ", port);
})
const express = require('express');
const app = express();
const port = 8090;

// req = Require = é o que o usuario manda para o servidor
// res = Response = é a resposta do servidor

app.get('/', (req, res) => {
    res.send("<h1>Deu certu o nodemon asdasdas</h1>")
})

// arrow function () => {}
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log("Este servidor está rodando na porta: ", port);
});
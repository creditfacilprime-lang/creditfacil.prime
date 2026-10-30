const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log('Webhook do Asaas recebido:', req.body);
    res.status(200).send('Recebido com sucesso');
});

app.get('/', (req, res) => {
    res.send('API do CreditFacil Prime a funcionar!');
});

app.listen(PORT, () => {
    console.log(`Servidor a correr na porta ${PORT}`);
});

const express = require('express');

const app = express();

// Permite receber JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.send('API rodando 🚀');
});

// Rota de usuários
app.get('/users', (req, res) => {
    const users = [
        { id: 1, nome: 'Matheus' },
        { id: 2, nome: 'João' }
    ];

    res.json(users);
});

module.exports = app;
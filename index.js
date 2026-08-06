const express = require('express');

const app = express();
const PORT = 3000;

// rota principal
app.get('/', (req, res) => {
  res.send('Servidor rodando 🚀');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
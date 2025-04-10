const express = require('express');
const cors = require ('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API do E-commerce funcionando!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const sequelize = require('./config/db');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o MySQL estabelecida!');
  } catch (error) {
    console.error('❌ Falha ao conectar ao MySQL:', error);
  }
}
testConnection();
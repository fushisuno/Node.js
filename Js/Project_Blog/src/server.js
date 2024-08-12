// Metedo para criar um servidor e requisições HTTP
const http = require('http');

// Porta padrão do servidor
const PORT = 3000;

// Importando o arquivo de rotas do servidor
const router = require('./routes/router.js');

// Criando o servidor
const server = http.createServer(router);

// Ouvindo o servidor
server.listen(PORT, () =>{
  console.log(`Sever is run in ${PORT}`)
});
// Metdodo para a leiteura de arquivos
const fs = require('fs');

// Pegando e lendo um arquivo json (simulando um banco)
const data = fs.readFileSync('../data/posts.json', 'utf8');

// Configurando as rotas do servidor 
const router = (req, res) => {
  switch (req.url){
    // Rota api
    case '/api':
      res.writeHead(200, {
        'Content-type': 'application/json',
      });
      res.end(data);
      break;

    default:
      res.end('404 Page not found');
  }
};

// Exportando as rotas em um unico objeto
module.exports = router;
const http = require('http');

// Cria o servidor 
const server = http.createServer((req, res) => {
  // Define o cabeçalho da resposta com status 200 (OK) e o tipo de conteúdo como texto simples
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Roteamento básico
  if (req.url === '/') {
    res.end('Hello, World!');
  } else if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString(); // Concatena os dados recebidos
    });

    req.on('end', () => {
        // Processa os dados recebidos (neste caso, apenas imprime no console)
        console.log('Received data:', body);

        // Responde ao cliente
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Data received');
    });
  } else if (req.url === '/about') {
      res.end('About page');
  } else{
      res.end('Page not found');
  }
});

// Define a porta para o servidor escutar
const PORT = 8080;

// Inicia o servidor e faz com que ele escute na porta especificada
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
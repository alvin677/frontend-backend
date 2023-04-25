const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/mydata') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({ message: 'Hello World!' }));
    res.end();
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('Page not found.');
    res.end();
  }
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

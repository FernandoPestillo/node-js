const http = require('http');

const port = 2222;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home bacana</h1>');
    };

    if (req.url === '/users') {
        const users = [
            {
                name: 'Fernando',
                email: 'fernando@gmail.com',
            },
            {
                name: 'Zé',
                email: 'falecomZé@gmail.com',
            },
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));
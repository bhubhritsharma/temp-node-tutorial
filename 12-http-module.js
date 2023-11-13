const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url === '/'){
        res.end('Welcome to our homepage...');
    } else if(req.url ==='/about') {
        res.end('Here is out short history !!!');
    } else {
        res.end(`
            <h1>Oops!</h1>
            <p>The URL you are trying to reach does not exists.</p>
            <a href="/">Back Home</a>
        `);
    }
})

server.listen(5000);
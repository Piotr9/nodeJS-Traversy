const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
                                                    //extremely ineffective way to read files. Much better to use Express.js
    // if(req.url === '/') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html' });
    //             res.end(content);
    //         }
    // )   ;
    // }

    // if(req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 30},
    //         { name: 'John Snow', age: 35}
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    //Build file path
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

        // Extension of file
        let extname =  path.extname(filePath);

        //Initial content type
        let contentType = 'text/html';

        //Check ext and set content type
        switch(extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'applcation/json';
                break;
            case '.png':
                contentType = 'image/png';
                break;
            case '.jpg':
                contentType = 'image/jpg';
                break;
        }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
'use strict';

const http = require('http');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    const fs = require('fs');
    if(request.url == '/style.css') {
        const text = fs.readFileSync('style.css', 'utf-8');
        response.end(text);
    } else {
        const text = fs.readFileSync('index.html', 'utf-8');
        response.end(text);
    }
});

console.log('port =', process.env.PORT);

server.listen(process.env.PORT || 3001);
console.log('Start');
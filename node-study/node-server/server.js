// node原生http模块

// const http = require('http');

// const server = http.createServer(function(req, resp) {
//     resp.statusCode = 200;
//     resp.setHeader('Content-Type', 'Content-Type', 'text/html');
//     resp.end('Hello world !');
// })

// server.listen(3000, function(){
//     console.log('服务已启动...');
// })

const express =  require('express');
const fs =  require('fs');

const app = express();

app.get('/getFavoriterList', (req, resp) => {
    resp.send(getFavoriterList(req));
});

app.get('/readMusic', (req, resp) => {
    resp.send(readMusic(req));
});

app.use('*', (req, resp) => {
    resp.status(404).send('请求接口不存在！');
});

app.listen(3000, function(){
    console.log('服务已启动...');
});

function getFavoriterList(req){
    return fs.readdirSync('resource/favoriterList');
}


function readMusic(req){
    return fs.readFileSync('resource/audio/海海海 - 阿悄.mp3');
}
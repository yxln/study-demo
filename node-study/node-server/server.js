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

const app = express();

app.get('/', (req, resp) => {
    resp.send('Hello World!');
});
app.post('/user', (req, resp) => {
    resp.send('user test!');
});
app.use('*', (req, resp) => {
    resp.status(404).send('请求接口不存在！');
});
app.listen(3000, function(){
    console.log('服务已启动...');
})
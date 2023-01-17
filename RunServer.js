const http = require('http');
const host = 'localhost:3000';

const port =3000;
const server =http.createServer((req,res)=>{
    res.setHeader('content','text/html');
    res.statusCode=200;
    res.end('hello');
});
server.listen(port, host, ()=>{
    console.log(`server is running at http://${host}:${port}/`)
})
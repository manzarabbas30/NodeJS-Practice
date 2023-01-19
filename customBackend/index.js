const fs =require('fs')
const http =require('http')
const port = 3000
const hostname ='127.0.0.1';
let index = fs.readFileSync('./index.html')
let about = fs.readFileSync('./about.html')
let project = fs.readFileSync('./project.html')
let contact = fs.readFileSync('./contact.html')
const server= http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    res.end(index)
})
server.listen(port,hostname,()=>{
    console.log(`server is running on port http://${hostname}:${port}`)
})
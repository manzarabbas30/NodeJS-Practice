const fs =require('fs')
const express =require('express')
const app = express();
const port = 3000
const hostname ='127.0.0.1';
let index = fs.readFileSync('index.html')
let about = fs.readFileSync('about.html')
let project = fs.readFileSync('project.html')
let contact = fs.readFileSync('contact.html')

app.get("/", (req, res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    res.send(index)
})

app.get("/about", (req, res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    res.send(about)
})

app.get("/project", (req, res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    res.send(project)
})

app.get("/contact", (req, res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    res.send(contact)
})


// const server= http.createServer((req,res)=>{
//     url=req.url
//     res.statusCode=200
//     res.setHeader('Content-Type','text/html')
//     if(url == '/' || url == ''){
//         res.end(index)
//     }
//     else if(url == '/about'){
//         res.end(about)
//     }
//     else if(url == '/project'){
//         res.end(project)
//     }
//     else if(url == '/contact'){
//         res.end(contact)
//     }
//     else {
//     res.statusCode=404

//         res.end(`<h1 class='text-center'>404 Not Fount</h1>`)
//     }
// })
app.listen(port,hostname,()=>{
    console.log(`server is running on port http://${hostname}:${port}`)
})
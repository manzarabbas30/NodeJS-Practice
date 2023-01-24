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
app.post("/contact", (req, res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    res.send('this is post request')
})
app.get("/this", (req, res)=>{
    res.statusCode=400
    res.setHeader('Content-Type','text/html')
    res.send('404 Page not found')
})

app.listen(port,hostname,()=>{
    console.log(`server is running on port http://${hostname}:${port}`)
})
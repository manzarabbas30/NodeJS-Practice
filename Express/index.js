const express =require('express');
const path = require('path');
const app = express();
const hostname ='localhost';
const port = 3000
const fs =require('fs')
const { application } = require('express');
let index = fs.readFileSync('index.html')
let about = fs.readFileSync('about.html')
let project = fs.readFileSync('project.html')
let contact = fs.readFileSync('contact.html')
//For serving static files
app.use('/static', express.static('static'))
//set the template engine
app.set('view engine', 'pug')
//set view dir
app.set('views',path.join(__dirname,'views'))

// our pub file endpoint
app.get ("/demo",(req,res)=>{
    res.status(200).render('demo',{title: "Hey there", message: "this is Our first pub template"})
})

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
const express =require('express');
const path = require('path');
const app = express();
const { application } = require('express');
const hostname ='localhost';
const port = 3000
const fs =require('fs')

//For serving static files
app.use('/static', express.static('static'))

//set the template engine
app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))

// our pub file endpoint
app.get ("/",(req,res)=>{
    const params={title: "Concert", message: "Concert page"}
    res.status(200).render('index',params)
})
app.get ("/about",(req,res)=>{
    const params={title: "About", message: "About page"}
    res.status(200).render('about',params)
})
app.get ("/project",(req,res)=>{
    const params={title: "Project", message: "Project page"}
    res.status(200).render('project',params)
})
app.get ("/contact",(req,res)=>{
    const params={title: "Contact", message: "Contact page"}
    res.status(200).render('contact',params)
})
app.get ("/this",(req,res)=>{
    const params={title: "404", message: "404 Page Not Found"}
    res.status(200).render('404',params)
})

//Server start
app.listen(port,hostname,()=>{
    console.log(`server is running on port http://${hostname}:${port}`)
})
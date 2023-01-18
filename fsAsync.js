const fs= require('fs');
let text =fs.readFile("text.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("This is a test message");

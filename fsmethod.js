const fs= require('fs');
let text =fs.readFileSync("text.txt","utf-8");
 text= text.replace('web','chrome');
console.log('the content of the file is');
console.log(text);
console.log("Creating a new file");
fs.writeFileSync('new.txt',text);

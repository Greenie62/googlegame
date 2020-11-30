const http = require('http');
const fs = require('fs');
const path = require('path');



http.createServer((req,res)=>{

    
    let fileName = path.join(__dirname,(req.url === "/" ? "index.html" : req.url))

    console.log("fileName: " + fileName);

    let extname = path.extname(fileName);
    let contentType;

    console.log('extname: ' + extname)

    switch(extname){

        case ".js":
            contentType="application/js"
        break;

        case ".html":
            contentType="text/html"
        break;

        case ".css":
            contentType="text/css"
        break;

        default:
            console.log("unknown contentType")
    }


    fs.readFile(fileName,"utf-8",(err,content)=>{
        if(err)throw err;
        res.writeHead(200,{"Content-Type":contentType});
        res.end(content)
    })
})
.listen(3005,console.log(`Listening in on port 3005.`))
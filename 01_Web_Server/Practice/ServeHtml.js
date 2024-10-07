const http = require('http')
const fs = require('fs')
const port = 4000 ;



const server = http.createServer((req,res)=>{
    if (req.url== '/home') {
         res.statusCode = 201;
         fs.readFile('01_Web_Server/Practice/server.html',(err,data)=>{
            if (err) {
                res.statusCode = 500; 
                res.setHeader('Content-Type','text/plain')
                res.end('Something went wrong!!')
            } else{
                console.log('Cheak the browswer for the html')
                res.statusCode=201;
                res.setHeader('Content-Type','text/html')
                res.end(data)
                
                console.log(data)
            }
         })
        } else{
        res.statusCode = 404;
        res.setHeader('Content-Type','text/plain')
        res.end('Page not found')
    }

})

server.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})

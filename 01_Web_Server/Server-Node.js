const http = require('http')
const hostname = '27.0.0.1';
const port = 3000;


const Server = http.createServer((req,res)=>{
    console.log('This is nothing but its the request.',req)
   if (req.url === '/') {
    res.statusCode = 250;
    res.setHeader('Content-Type','text/plain')
    res.end('Hey ! My job is done ')
   } else if(req.url === '/login'){
    res.statusCode = 250;
    res.setHeader('Content-Type','text/plain')
    res.end('Hey ! My job is done and the job starts of authentication .')
   } else{
    res.statusCode = 404;
    res.setHeader('Content-Type','text/plain')
    res.end('Not found.')
   }
})


Server.listen(port,(req,res)=>{
    console.log(`Server is listening on http://localhost:${port}`)
})

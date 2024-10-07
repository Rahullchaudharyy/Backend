const http = require('http')
const port = 3000;
const fs = require('fs')

// const fetch = require('node-fetch'); // If using Node.js < v18, you need to install node-fetch

const nextId = 0;

const Server = http.createServer( async(req,res)=>{
         
    if (req.url=='/') {
        res.writeHeader(200,{'Content-Type':'text/html'})
        res.end('<h1 style="text-align:center; ">Home page</h1>')
    } else if (req.url=='/about') {
        res.writeHeader(200,{'Content-Type':'text/html'})
        res.end('<h1 style="text-align:center; ">About page</h1>')
    } else if (req.url=='/contact') {
        res.writeHeader(200,{'Content-Type':'text/html'})
        res.end('<h1 style="text-align:center; ">contact page</h1>')
    } else if (req.url=='/api') {
        const  fetchData = async ()=>{
            const data = await fetch(`https://api.github.com/users/hiteshchoudhary`)
            const result = await data.json();
            return result
          }
          const data = await fetchData()

        res.writeHeader(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(data))
    } else if (req.url=='/create' && req.method == 'POST'){
              
        const OrderData = [];
        const { Product, Price } = req.body;

        OrderData.push({ id: nextId++, Product, Price })



        res.wrtieHeader(201,{'Content-Type':'application/json'})
        res.end(JSON.stringify(data))

    }else{
        res.writeHeader(404,{'Content-Type':'text/html'})
        res.end('<h1 style="align-text:center; "> page not found</h1>')
        
    }
})

Server.listen(port,()=>{
    console.log(`Server is started on the port ${port}`)
})



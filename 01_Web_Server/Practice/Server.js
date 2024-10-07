// const http = require('http')
// const port = 3000;
// const fs = require('fs')
// const JsonData = {
//     "id": 101,
//     "name": "John Doe",
//     "age": 29,
//     "email": "johndoe@example.com",
//     "address": {
//       "street": "123 Main St",
//       "city": "Springfield",
//       "state": "IL",
//       "postalCode": "62704"
//     },
//     "phoneNumbers": [
//       {
//         "type": "home",
//         "number": "555-555-1234"
//       },
//       {
//         "type": "mobile",
//         "number": "555-555-5678"
//       }
//     ],
//     "isVerified": true,
//     "accountBalance": 3567.89,
//     "recentTransactions": [
//       {
//         "date": "2024-10-01",
//         "amount": 250.75,
//         "description": "Grocery Store"
//       },
//       {
//         "date": "2024-09-28",
//         "amount": 105.50,
//         "description": "Restaurant"
//       },
//       {
//         "date": "2024-09-25",
//         "amount": 99.99,
//         "description": "Online Purchase"
//       }
//     ],
//     "preferences": {
//       "newsletter": true,
//       "notifications": {
//         "email": true,
//         "sms": false,
//         "push": true
//       }
//     }
//   }
//   const path = 'server.html';




const http = require('http');
const port = 3000;
const fs = require('fs');
const JsonData = {
    "id": 101,
    "name": "John Doe",
    "age": 29,
    "email": "johndoe@example.com",
    "address": {
      "street": "123 Main St",
      "city": "Springfield",
      "state": "IL",
      "postalCode": "62704"
    },
    "phoneNumbers": [
      {
        "type": "home",
        "number": "555-555-1234"
      },
      {
        "type": "mobile",
        "number": "555-555-5678"
      }
    ],
    "isVerified": true,
    "accountBalance": 3567.89,
    "recentTransactions": [
      {
        "date": "2024-10-01",
        "amount": 250.75,
        "description": "Grocery Store"
      },
      {
        "date": "2024-09-28",
        "amount": 105.50,
        "description": "Restaurant"
      },
      {
        "date": "2024-09-25",
        "amount": 99.99,
        "description": "Online Purchase"
      }
    ],
    "preferences": {
      "newsletter": true,
      "notifications": {
        "email": true,
        "sms": false,
        "push": true
      }
    }
};
const path = '01_Web_Server/Practice/server.html';

const Server = http.createServer((req, res) => {
    res.statusCode = 200;
    
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World !!\n');

    } else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is about page !!\n');

    } else if (req.url === '/details' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const data = {response: JsonData};
        res.end(JSON.stringify(data));
        console.log('This is server details:', Server);

    } else if(req.url == '/landingpage'){
          fs.readFile(path,(err,data)=>{
            if(err){
                res.statusCode = 500;
                res.writeHead(200,{'Content-Type':'text/html'});
                console.log(err.message)
            } else{
                res.statusCode = 201;
                res.end(data);
                console.log(data)
            }
          })
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`${req.url} Not found, Sorry !!`);
    }
});

Server.listen(port, () => {
    console.log('Server Started on the port:', port);
});

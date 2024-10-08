import express from 'express';

const app = express();

app.post('/create',(req,res)=>{
    
})
app.get('/details',(req,res)=>{
    
})
app.get('/details/:id',(req,res)=>{
    res.send(req.params)
})
app.put('/update/:id',(req,res)=>{
    
})

app.delete('/delete/:id',(req,res)=>{
    
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:3000/`);
});

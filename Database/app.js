import express from 'express'
import { PORT } from './constant.js';
import { ConectingDB } from './db.js';
import { User } from './model.js';


const app =  express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))


ConectingDB()
.then(()=>{

    app.listen(PORT,()=>{
        console.log(`Server running on the port ${PORT}`)
    })
    
})
.catch((err)=>{
    console.log(err.message)
})


app.post('/create', async (req,res)=>{
    const {userName,email,gender,jobtitle} = req.body;
    
   const user =  await User.create({
        userName:userName,
        email:email,
        gender:gender,
        jobtitle:jobtitle
    })

    return res.status(201).json({message:"success", user})

})
app.get('/users', async (req,res)=>{
      const users = await User.find({})

    return res.status(201).json({message:"Fetched", users})

})
app.get('/users/:id', async (req,res)=>{
    const id = req.params.id;
      const users = await User.findById(id)

    return res.status(201).json({message:"Fetched", users})

})
app.delete('/users/:id', async (req,res)=>{
    const id = req.params.id;
      const users = await User.findByIdAndDelete(id)

    return res.status(201).json({message:"Deleted the user : -", users})

})


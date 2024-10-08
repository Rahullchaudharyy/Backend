
import express from 'express';
import fs from 'fs'

const app = express();
const PORT = 3000;
app.use(express.json())

let highestId = 0 ;
let AllData = []

try {
    const data = fs.readFileSync('./data.json', 'utf-8')
    // console.log(data)
    AllData = JSON.parse(data);
  highestId = Math.max(...AllData.map(obj => obj.id))
 
} catch (error) {
    console.log('something went wrong ', error.message)
}



app.get('/todos', (req, res) => {
    let AllTodos;
    try {
        const data = fs.readFileSync('./data.json', 'utf-8')
        AllTodos = data;

    } catch (error) {
        console.log('error', error.message)
    }

    res.status(200).send(AllTodos)
})
app.get('/todos/:id', (req, res) => {
    let AllTodos=[];
    let filterd;
    try {
        const data = fs.readFileSync('./data.json', 'utf-8')         
        AllTodos =JSON.parse(data) ;
        filterd = AllTodos.filter(i => i.id === Number(req.params.id));
        if (filterd.length < 0 ) {
            res.send('The given Id does not exist...')
        }

    } catch (error) {
        console.log('error', error.message)
    }

    res.status(200).send(filterd)
})
app.put('/todos/:id',(req,res)=>{
    const data = fs.readFileSync('./data.json', 'utf-8') 
    console.log('This is Data ',data)        
       let AllTodos =JSON.parse(data) ;


       const todoId = Number(req.params.id)
       const index = AllData.findIndex(i=>i.id === todoId)
       const {Todo} =req.body
       if(index===-1){
        res.status(404).send('Not found')
    }
    AllTodos[index].Todo = Todo;
     
    fs.writeFileSync('./data.json',JSON.stringify(AllTodos,null,2),'utf-8')
    
    res.status(201).send('sucessfully updated')
        

})
app.delete('/todos/:id',(req,res)=>{
    const data = fs.readFileSync('./data.json', 'utf-8') 
    console.log('This is Data ',data)        
       let AllTodos =JSON.parse(data) ;


       const todoId = Number(req.params.id)
       const index = AllData.findIndex(i=>i.id === todoId)
       if(index<0){
        res.status(404).send('Not found')
    }
    AllTodos.splice(index,1)
     
    fs.writeFileSync('./data.json',JSON.stringify(AllTodos,null,2),'utf-8')
    
    res.status(201).send('sucessfully deleted')
        

})
app.post('/todos/create', (req, res) => {

    const { Todo } = req.body;
    if (!Todo) {
        console.log('Erorr')
        res.end("Erorr While creating the data please add the raw data that you want to create in the object")
    } else {
        const TodoData = {
            Todo,
            id: highestId+1
        }
        let existingArr = [];
        try {
            const data = fs.readFileSync('./data.json', 'utf-8')
            existingArr = JSON.parse(data)

        } catch (error) {


            console.log('error', error.message);

        }

        existingArr.push(TodoData)

        fs.writeFileSync('./data.json', JSON.stringify(existingArr, null, 2));


        res.status(201).send('Todo created sucessfully !!')
    }


})






app.listen(PORT, () => {
    console.log(`Server running at http://localhost:3000`);
});
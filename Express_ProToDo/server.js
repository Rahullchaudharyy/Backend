
import { error } from 'console';
import express from 'express';
import fs from 'fs'

const app = express();
const PORT = 3000;
app.use(express.json())

let TaskNumber = 0;
let AllData = []


try {
    const data = fs.readFileSync('./data.json', 'utf-8')
    AllData = JSON.parse(data);
} catch (error) {
    console.log('something wind wrong ', error.message)
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
app.post('/todos/create', (req, res) => {

    const { Todo } = req.body;
    if (!Todo) {
        console.log('Erorr')
        res.end("Erorr While creating the data please add the raw data that you want to create in the object")
    } else {
        TaskNumber = TaskNumber + 1
        const TodoData = {
            Todo,
            id: TaskNumber
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
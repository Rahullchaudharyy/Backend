import fs from 'fs'
// fS STANDS for the filesystem and this is used to handle the file and the internal works , 


const command = process.argv[2]
const argument = process.argv[3]



// console.log(fs)
const FilePath = './task.json'

const LoadTask = ()=>{
    try {
     const BufferData = fs.readFileSync(FilePath)
     const DataJSON = BufferData.toString()
     return JSON.parse(DataJSON)
    } catch (error) {
        return []
    }
}
const saveTask= (tasks)=>{

   const DataJSON =  JSON.stringify(tasks)

    fs.writeFileSync(FilePath,DataJSON)

}

const addTask = (task)=>{

    const tasks = LoadTask()
    tasks.push({task})
    saveTask(tasks)
    console.log("Task Added",task)
}
const listTask = ()=>{
    const Tasks = LoadTask()
    Tasks.forEach((element,index) => {
        console.log(index+1,"-",element.task)
    });
}

const removeTask = (TaskIndex) => {
    const Tasks = LoadTask();
    const zeroBasedIndex = TaskIndex - 1;

        const removedTask = Tasks.splice(zeroBasedIndex, 1); 
        // console.log(` Tasks :`, removedTask);
        if(removedTask.length === 0 ){
            console.log('Cannot Remove more Task')
        } else{
            console.log('The task has been removed')
        }
        saveTask(Tasks); 

        if (Tasks.length === 0 ) {
             console.log('Task Status = There is no such task available now')
        }
  
};



const ShowInfo = () => {
    const info = `
        For adding a task: 'Your/file/path' add 'Your Task in string'
        For listing tasks: 'Your/file/path' list
        For removing a task: 'Your/file/path' remove 'index of the task you want to remove'
    `;
    console.log(info.trim());
};

if (command === 'add') {
    addTask(argument);
} else if (command === 'list') {
    listTask();
} else if (command === 'remove') {
    removeTask(parseInt(argument));
}else if (command === 'help') {
    ShowInfo();
} else{
    console.log('There no such command !!!')
}




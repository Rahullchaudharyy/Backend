import { MongoDB_URL } from "./constant.js"
import mongoose from 'mongoose';


const ConectingDB = async ()=>{
    try {
        const conectionInstance = await mongoose.connect(MongoDB_URL)
        console.log('Database conected succeessfully !!', conectionInstance.connection.host)
        
    } catch (error) {
       console.log('Erorr while conecting the database ', error)  
    } 
}
// In this db.js we are just going to conect the database that is just mongoDB sql database nothing else . 

export {ConectingDB}

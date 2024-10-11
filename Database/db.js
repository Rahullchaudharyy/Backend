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


export {ConectingDB}
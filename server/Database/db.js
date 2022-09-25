import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

export const connect = ()=>{

    let mongo_url = process.env.CONNECTION_URL;

    mongoose.connect(mongo_url, {useNewUrlParser : true});

    mongoose.connection.on('connected', ()=>{
        console.log('Database Connected')
    })

    mongoose.connection.on('disconnected', ()=>{
        console.log('Database Disconnected')
    })

    mongoose.connection.on('error', ()=>{
        console.log('Error while connecting database', error.message)
    })
}
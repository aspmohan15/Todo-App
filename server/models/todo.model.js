import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema({
    data : {
        type: String,
        required: true
    },
    done : {
        type : Boolean,
        default : false
    }
},
{
    timestamps : true,
    versionKey : false
})


export const todo = mongoose.model("todo", todoSchema)
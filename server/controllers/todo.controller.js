import { todo} from "../models/todo.model.js"


export const addTodo = async (req, res) =>{
    try{
        const newTodo = await todo.create({
            data : req.body.data,
            createdAt : Date.now()
        })    
        await newTodo.save();
        res.status(201).send(newTodo);
    }
    catch(error){
        return res.status(500).send(error.message)
    }
}


export const getTodo = async (req, res) => {
    try {
        const allTodo = await todo.find({}).sort({ 'createdAt' : -1}).lean().exec();
        res.status(200).send(allTodo)
    }
    catch(error) {
        return res.status(500).send(error.message)
    }
}
export const toggleTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const selectedTodo = await todo.findById(id).lean().exec();
        const todoItem = await todo.findOneAndUpdate({_id : id}, {done : !selectedTodo.done})
        await todoItem.save();
        res.status(200).send(selectedTodo)
    }
    catch(error) {
        return res.status(500).send(error.message)
    }
}
export const updateTodo = async (req, res) => {
    try {
        const {id} = req.params;
       await todo.findOneAndUpdate({_id : id}, {data : req.body.data})

       const todoItem = await todo.findById(id)
        res.status(200).send(todoItem)
    }
    catch(error) {
        return res.status(500).send(error.message)
    }
}


export const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
       const todoItem = await todo.findByIdAndDelete(id)
        res.status(200).send(todoItem)
    }
    catch(error) {
        return res.status(500).send(error.message)
    }
}

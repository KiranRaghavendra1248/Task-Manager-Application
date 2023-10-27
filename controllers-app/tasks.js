const Task = require('../models/task')

const getAllTasks = async (req,res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks:tasks})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
// it is good practice to handle await promise lines of code inside a try catch block
const createTask = async (req,res)=>{
    try{
        const task = await Task.create({
            name : req.body.name,
            completed : false
        })
        res.status(201).json({task})
    } catch(error){
        res.status(500).json({msg:error})
    }
    
}

const getSingleTask = (req,res)=>{
    res.json({id : req.params.id})
}

const editSingleTask = (req,res)=>{
    res.send("This task has been modified")
}

const deleteSingleTask = (req,res)=>{
    res.send("This task has been deleted")
}

module.exports = {
    getAllTasks, createTask, getSingleTask, editSingleTask, deleteSingleTask
}
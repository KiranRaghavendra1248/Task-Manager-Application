
const getAllTasks = (req,res)=>{
    res.send("All Tasks")
}

const createTask = (req,res)=>{
    res.json(req.body)
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
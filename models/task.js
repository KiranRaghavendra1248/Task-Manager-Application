const mongoose = require('mongoose')

// adding validation to the DB schema
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Must provide name of task'],
        trim:true,
        maxlength:[20,'Name cannot be more that 20 characters']
    },
    completed:{
        type:Boolean,
        default:false    
    }
})

module.exports = mongoose.model('Task', TaskSchema, 'my_tasks')
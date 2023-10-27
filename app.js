require("./db/connection");
const express = require("express");
const app = express();
const tasks = require("./routes-app/tasks");
const connectDB = require("./db/connection");

require("dotenv").config()

const port = 3000;

//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks') - get all tasks
// app.post('api/v1/tasks') - add task
// app.get('api/v1/tasks/:id') - get single task
// app.patch('api/v1/tasks/:id') - update a task
// app.delete('api/v1/tasks/:id') - delete a task

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        console.log("Connected to DB...")
        app.listen(port, () => {
            console.log(`Listening on port ${port}...`);
        });
    }catch(error){
        console.log(error)
    }
}

start()

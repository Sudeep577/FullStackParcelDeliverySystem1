const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cron = require('node-cron');
const mongoose = require('mongoose');


dotenv.config();

//DATABASE CONNECTION
const DB = process.env.DB;
mongoose.connect(DB).then(()=>{
console.log("DB connection successful")
}).catch((e)=>{
    console.log(e);
})

//TASK SCHEDULER
const run =() => {
    cron.schedule('* * * * * *', () => {
    
      });
}

run();

//SERVER
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`BackgroundServices is running on port ${PORT}`);
})
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

//loading environment variables
dotenv.config({path:'./config/config.env'});

//import MongoDB connection config
const connectDB = require('./config/db');

connectDB();

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

const app = express();


//dev logging middleware
if(ENV === 'development'){
    app.use(morgan('dev'));
}


const server = app.listen(()=>{
    console.log(`Server is running on PORT ${PORT} in ${ENV} environment`.green.bold);
    //handling unhandled promise rejection from mongoose connection to database
    process.on('unhandledRejection', (err, promise) =>{
        console.log(`Error:${err.message}`);
    //close server and exit process
    server.close(()=> process.exit(1));
    });

})
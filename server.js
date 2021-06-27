'use strict';
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');


//loading environment variables
dotenv.config({path:'./config/config.env'});

//import MongoDB connection config
const connectDB = require('./config/db');

connectDB();

const PORT = process.env.PORT;
const ENV = process.env.NODE_ENV;

//importing Routes
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');
const settingRoutes = require('./routes/settings');
const transactionRoutes = require('./routes/transactions');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');




const app = express();

//body parser
app.use(express.json());

//cookie parser
app.use(cookieParser());

//Mount routers unto specific urls
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/settings', settingRoutes);
app.use('/api/v1/transactions', transactionRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/auth', authRoutes);

//dev logging middleware
if(ENV === 'development'){
    app.use(morgan('dev'));
}

//error Handler
app.use(errorHandler);

//running server on specified port.
const server = app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT} in ${ENV} environment`.green.bold);
    //handling unhandled promise rejection from mongoose connection to database
    process.on('unhandledRejection', (err, promise) =>{
        console.log(`Error:${err.message}`);
    //close server and exit process
    server.close(()=> process.exit(1));
    });

})
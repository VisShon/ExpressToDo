const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 3000;
const{errorHandler} = require('./middlewares/errorMiddleware');
const {connectDB} = require('./config/database');

const app = express();

connectDB();

//for request body text
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler);

app.listen(port,() => {console.log(`listening on ${port}`)});
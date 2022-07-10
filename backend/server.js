const express = require('express');
const dotenv = require('dotenv').config();
var cors = require('cors');
const colors = require('colors');
const port = process.env.PORT || 8000;
const{errorHandler} = require('./middlewares/errorMiddleware');
const {connectDB} = require('./config/database');

const app = express();

connectDB(process.env.MONGODB_URI);

//for request body text
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler);

app.listen(port,() => {console.log(`listening on ${port}`)});
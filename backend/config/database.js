const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async (uri) =>{
    try{
        const conn = await mongoose.connect('mongodb+srv://Vishnu:ucvnr0021b@cluster0.ercrf.mongodb.net/?retryWrites=true&w=majority');
        console.log(`Connected to MongoDB:${conn.connection.host}`.green.underline);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
} 

module.exports = {
    connectDB
};
const mongoose= require('mongoose');
require('dotenv');

exports.connect = () =>{
    mongoose.connect(process.env.DB_URL)
    .then(() =>console.log('connected to database'))
    .catch((err)=>{
        console.error('Error connecting to database:', err);
        process.exit(1);
    })
}
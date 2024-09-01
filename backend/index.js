const express = require("express");
const app=express();

const cors=require('cors');
app.use(cors());

require('dotenv').config();
const port =process.env.PORT ||4001;

app.use(express.json());
const db = require('./config/database');
db.connect(); 

const mainRoutes=require('./routes/index');
app.use('api/v1/user',mainRoutes);
//app.use('api/v1/account',routes);
app.listen(port, ()=>{
    console.log(`App is running at port ${port}`);
})
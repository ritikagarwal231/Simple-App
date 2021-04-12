require('./models/db');
const employeeController = require("./controllers/employeeController");
const express = require('express');

const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.use('/employee' , employeeController);



















app.listen(3000,()=>{
    console.log("express server stated at port : 3000");
})
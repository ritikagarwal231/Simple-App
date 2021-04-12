const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true},(err)=>{
    if(!err){
        console.log('Mongodb Connection successful');
    }
    else
    console.log('Error in db connection:' + err);
});
require('./employee.models');
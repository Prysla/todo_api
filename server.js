const { request, response } = require('express');
const express = require('express');
const app =express();
//importing mongoose
const mongoose=require('mongoose');
//importing todoController
const todoController = require('./controllers/todoController');
//importing todoModel
// const todoModel = require('../models/todoModels');

app.get('/', todoController.getAllTodo);
// (request,response)=> {
//     response.send('Hello this is a get method');
// });

app.post('/',(request,response)=>{
    response.send('Hello this is a post methiod');
});

app.put('/',(request,response)=>{
    response.send('Hello this is a put methiod');
});

app.get('/todos',(request,response)=>{
    response.send([{
        'title':'Plan trip to finland',
        'description':'I will be going to finland next year',
        'time':'Today',
        'isCompleted':false
    }]);
});

app.get('/users',(request,response)=>{
    response.send([{
        'username':'Prysla Middleton Saved',
        'password':'Psaved221',
        
    }]);
});
//listening to request on localhost for 3002
app.listen(3002,() => {
    console.log("My server is up and running on port 3002");
    mongoose.connect('mongodb+srv://todo_db:mongo123@cluster0.2sjvk.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("Database is connected");
    })
    .catch(function(error){
        console.log("Dtabase not connected",error);
    });
});
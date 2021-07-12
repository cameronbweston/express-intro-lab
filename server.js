//import modules
import express from 'express'
import * as todoDb from './data/todo-db.js'

//Create express app
const app = express()

//Configure the app (app.set)
app.set('view engine', 'ejs');

//Mount Middleware (app.use)    

//Mount routes
app.get('/', function(req, res) {
    res.redirect('/todos');
})

app.get('/home', function(req, res) {
    res.render('home'); //Render automatically looks inside of VIEWS folder. So you can just type 'home' and it will go to home.ejs
})

app.get('/todos', function(req, res) {
    todoDb.find({}, function(error, todos) {
        res.render('todos/index', {
            //left of the colon: what it is called in <html>
            //right of the colon: what it is called here
            todos: todos,
            error: error
        } );
    })
})

//Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
})
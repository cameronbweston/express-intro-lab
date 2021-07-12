//import modules
import express from 'express'
import * as artists from './data/artists-db.js'

//Create express app
const app = express()

//Configure the app (app.set)
app.set('view engine', 'ejs');
app.use(express.static('style'));

//Mount Middleware (app.use)    

//Mount routes
app.get('/', function(req, res) {
    res.redirect('/todos');
})

app.get('/home', function(req, res) {
    res.render('home'); //Render automatically looks inside of VIEWS folder. So you can just type 'home' and it will go to home.ejs
})

app.get('/todos', function(req, res) {
    artists.find({}, function(error, artist) {
        res.render('todos/index', {
            //left of the colon: what it is called in <html>
            //right of the colon: what it is called here
            artist,
            error
        } );
    })
})

//Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
})
//require 
const path = require("path"); //set path parser
const express = require("express");//require express
const app = express(); //set express equal to const app
const morgan = require("morgan"); //require middleware
const mongoose = require("mongoose");//require mongoose for mongoDB

//connecting to db
mongoose.connect('mongodb://localhost/crud-mongo')
.then(db => console.log('db connected'))
.catch(err => console.log(err));


//importing routes
const indexRoutes = require('./routes/index.js');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', indexRoutes);

//start server
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
    console.log();
    console.log(path.join(__dirname, 'views'));
});
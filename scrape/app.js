var express = require('express');
var bodyParser = require('body-parser');
var  path = require('path');

var app = express();

// var logger = function(req, res, next){
// 	console.log('logging');
// 	next();
// }

// app.use(logger)


//Body Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'client')))

var person = {
	name: 'Jeff',
	age: 30
}

app.get('/', function(req, res){
	res.json(person);
});

app.listen(3000, function(){
	console.log('server started')
})
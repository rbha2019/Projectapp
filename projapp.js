var express = require ('express');
var path = require ('path');
var app = express();

var mysql = require('mysql');
var connection = require('./dbConfig');

//ejs template
app.set('view engine', 'ejs');

//this is for read POST data
app.use(express.json());

app.use(express.urlencoded({
	extended:true
	}));

//All routing start here..

//home page
app.get('/', function (req,res) {
res.render("home");
})

//dbRead page displays the retrived data in an HTML table
app.get('/dbRead', function (req, res) {
	connection.query("SELECT * FROM users", function (err, result) {
		if (err) throw err;
		console.log(result);
		res.render('dbRead', { title:'xyz', userData: result});
		});
	});

app.listen(process.env.port || 3000);
console.log('Running at Port 3000');             
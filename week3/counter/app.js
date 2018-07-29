var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');


var session = require('express-session');

app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// root route to render the index.ejs view
app.get('/', function(req, res) {
	if (req.session.visits) {
		req.session.visits++;
	} else {
		req.session.visits = 1;
	}
	res.render("index.ejs", {visits: req.session.visits});
});

app.get('/add2', function(req,res) {
	req.session.visits++;
	res.redirect('/');
})

app.get('/clear', function(req,res) {
	req.session.visits = -1;
	res.redirect('/')
})



// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});

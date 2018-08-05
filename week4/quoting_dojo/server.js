var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/basic_mongoose',{useNewUrlParser:true});
//create mongoose schema:
var UserQuoteSchema = new mongoose.Schema({
  name:  {  type: String,
            required: true,
            minlength: 2},
  quote: {  type: String, 
            required: true},
}, 
    {timestamps: true });

//store schema:

mongoose.model('UserQuote', UserQuoteSchema);
var UserQuote = mongoose.model('UserQuote');

app.get('/', function(request, response) {
    response.render('index');
})

app.post('/quotes', function (request, response){
  UserQuote.create(request.body, function(err) {
      if (err) { console.log(err); }
      response.redirect('/quotes');
    })


})
app.get('/quotes',function(request,response){
  UserQuote.find({}, function(err, quotes) {
   if (err) { console.log(err); }
   response.render('quotes', { quotes: quotes });

    })
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})

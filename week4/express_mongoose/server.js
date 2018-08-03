const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const port = process.env.PORT || 8000;
const {Schema} = mongoose;
const app = express();

app.set('view engine','ejs');
app.set('views',path.resolve('views'));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb://localhost:27017/authors_books',{useNewUrlParser:true});
mongoose.connection.on('connected',() => console.log('connected to db'));

const authorSchema = new Schema ({
    name :{
        type : String,
        required : true,
        trim : true
    },
    isAlive :{
        type: Boolean,
        default: true

    },
    books:[
        {
            type: Schema.Types.ObjectId,
            ref : 'Book'
        }
    ]
});
const bookSchema = new Schema({
    title :{
        type : String,
        required :true,
        trim : true
    },
    pages :{
        type: Number,
        min : 1
    },
    year :{
        type : Number,

    },
    author:[
        {
            type: Schema.Types.ObjectId,
            ref : 'Author'
        }
    ]

});

const Author = mongoose.model('Author',authorSchema);
const Book = mongoose.model('Book',bookSchema);

app.get ('/',function(request,response){
response.render('index');
});
app.get('/authors',function(request,response){
    Author.find({})
    .then(authors => response.render('authors/index',{authors}))
    .catch(console.log);
    
})
app.post('/authors',function(request,reponse){
    Author.create(request.body)
    .then(author => {
        console.log('created author',author);
        response.redirect('/authors');
    })
    .catch(error => {
        const errors = Object.keys(error.errors)
          .map(key => error.errors[key].message)
  
        response.render('authors/new', {errors});
    })
});
app.get('/authors/new',function(request,response){
    response.render('authors/new')
})
app.listen(port, () => console.log ('listening at 8000'));

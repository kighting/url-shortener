//Get requirements and set instances of them

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const shortURL = require('./public/models/shortUrl'); //The structure/template of the our URL document

app.use(bodyParser.json());
app.use(cors());

//Connect to the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shortUrls');
//The collection is shortUrls because mongoDB pularize the name of the collection


//Allows node to find static content
app.use(express.static(__dirname + '/public'));


//Create the database entry
//If we call http://, the system will think that we'll go into a sub directory. (*) is saying that "accept 'all' as the string regardless how it's formatted"
app.get('/new/:urlToShorten(*)', function(req, res, next){
    var urlToShorten = req.params.urlToShorten;
    //console.log(urlToShorten);
    
    //Regex for url to verify if the input is a link
    var regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    if(regex.test(urlToShorten)===true){
        //Create a potential document
        var short = Math.floor(Math.random()*100000).toString();
        var data = new shortURL(
            {
                //The keys need to match the schema in shortUrl.js
                originalUrl: urlToShorten,
                shorterUrl: short
            }
        );
        //Save the document to the database
        data.save(function(err){
           if(err){
               return res.send('Error saving to database');
           }
        });
        return res.json(data);
    } else {
        var data = new shortURL({
            originalUrl: urlToShorten,
            shorterUrl: 'Invalid url'
        });
        return res.json(data);
    };
    
});



//Listen to see if everything is working
//process.env.PORT is the port for Heroku
app.listen(process.env.PORT || 3000, function(){
   console.log('listening to port'); 
});
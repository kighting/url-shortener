//Get requirements and set instances of them

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());

//Allows node to find static content
app.use(express.static(__dirname + '/public'));


//Create the database entry
//If we call http://, the system will think that we'll go into a sub directory. (*) is saying that "accept 'all' as the string regardless how it's formatted"
app.get('/new/:urlToShorten(*)', function(req, res, next){
    var urlToShorten = req.params.urlToShorten;
//    console.log(urlToShorten);
    return res.json({urlToshorten});
});





//Listen to see if everything is working
//process.env.PORT is the port for Heroku
app.listen(process.env.PORT || 3000, function(){
   console.log('listening to port'); 
});
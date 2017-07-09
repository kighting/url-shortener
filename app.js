//Get requirements and set instances of them

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(cors());




//Listen to see if everything is working
//process.env.PORT is the port for Heroku
app.listen(process.env.PORT || 3000, function(){
   console.log('listening to port'); 
});
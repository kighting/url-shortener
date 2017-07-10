//The data structure/template/model of document for shortURL
//Require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//There's no need to create a primary key, because mongoose does that for you

//Create Schema
const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shorterUrl: String
}, {timestamps: true});

//Define model class
const ModelClass = mongoose.model('shortUrl', urlSchema);
//shortUrl is going to be the collection, essentially the table.
//urlSchema is going to be the structure.

//Allow us to access this in app.js
module.exports = ModelClass;

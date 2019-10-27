const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for profile form details
const signup_details = new Schema({
    userName:String,
    email:String,
    password:String,
    confirmPassword:String
});

module.exports =  mongoose.model('signup_details', signup_details
);

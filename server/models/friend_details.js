const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for student details
const friend_details = new Schema({
    name: String,
    department: String,
    mail: String,
    address: String
});


module.exports =  mongoose.model('friend_details', friend_details);

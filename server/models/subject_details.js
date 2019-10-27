const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//schema for student form details
const subject_details = new Schema({
    subjectName: String ,
    subjectDescription: String,
    professorName:String,
    credits:String,
});

module.exports =  mongoose.model('subject_details', subject_details);

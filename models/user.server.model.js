var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Skill = require('./skill.server.model')


var userSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  skills : [{
    type : Schema.ObjectId,
    ref  : 'Skill'
  }]
});


module.exports = mongoose.Model('User', userSchema)

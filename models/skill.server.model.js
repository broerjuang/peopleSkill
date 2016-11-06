var mongoose = require('mongoose');


var skillSchema = new Schema({
  skill : String,
  value  : Number
});

module.exports = mongoose.Model('Skill', skillSchema);

'use strict'

const mongoose = require('mongoose');

let skillSchema = mongoose.Schema({

    skill: {
      type:String,
      required:true

    },
    value   : Number

});


let Schema = mongoose.Schema

let userSchema = new Schema({

  user: String,
  skill:[skillSchema]

},{

  timestamps:true

})

let Users = mongoose.model('Users', userSchema)

module.exports = Users

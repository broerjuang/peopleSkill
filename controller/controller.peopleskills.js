'use strict'

const express = require('express');
const mongoose = require('mongoose');
const Users = require('../models/user.server.model');

//===============================
// function to collect skills ==
//=============================

// let collect = (skill) => {
//
//   return skill.split(',')
//
// }

//==============
// controller ==
//=============


let seeding = (req,res) => {
  console.log("masukk");
  let skillseeder = [{skill:"berbicara" , value:10},{skill:"coding" , value:6},{skill:"makan" , value:7}]
  let users = new Users({

      user  : "bagus juang wiantoro",
      skill : []

  })

  for (let i = 0; i < skillseeder.length; i++) {
    users.skill.push({skill:skillseeder[i].skill, value:skillseeder[i].value});
  }

  users.save((err,user) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(user);
      res.json(user)
    }
  })

}


module.exports = {
  seeding:seeding
}

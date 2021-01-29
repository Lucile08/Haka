var express = require('express');
var router = express.Router();
//var request = require("sync-request");

var UserModel = require('../models/users');



router.post('/sign-up', async function(req, res, next){

  var searchUser = await UserModel.findOne({
      email: req.body.emailFromFront
  })

  if(!searchUser){
  var newUser = new UserModel({
      username: req.body.usernameFromFront,
      email:req.body.emailFromFront,
      password:req.body.passwordFromFront,
    });
    
    var newUserSave = await newUser.save();

      req.session.user = {
         name: newUserSave.username,
         id: newUserSave._id
      }
        
  
    res.redirect('/homepage');
     } else {
     res.redirect('/');
     }

   });


router.post('/sign-in', async function(req, res, next) {

  var searchUser = await UserModel.findOne(
    {email:req.body.emailFromFront,
     password:req.body.passwordFromFront
      })
      //console.log(searchUser)
      if(searchUser!=null) {
        req.session.user = {
            name: searchUser.username,
            id: searchUser._id
        }
        res.redirect('/homepage');
        } else {
          res.render('login');
          } 
         
});

module.exports = router;

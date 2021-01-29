const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    
   });

   module.exports = mongoose.model('users', userSchema);

  
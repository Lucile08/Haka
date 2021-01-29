var express = require('express');
var router = express.Router();

var JourneyModel = require('../models/journeys');
var UserModel = require('../models/users');

var city = ["Paris","Marseille","Nantes","Lyon","Rennes","Melun","Bordeaux","Lille"]
var date = ["2018-11-20","2018-11-21","2018-11-22","2018-11-23","2018-11-24"]


router.post('/add-traject', async function(req, res, next) {

    //var trajet = await JourneyModel.find();
    var departureX = req.body.newdep;
    var arrivalX = req.body.newdest;

     var dates = new Date(req.body.newdate);
      //console.log(dates)

    var  trip = await JourneyModel.find({departure: departureX,
         arrival: arrivalX,
         date: dates,
    });
       //console.log(match[0].departure)
     // for(var i=0; i<match.length; i++) {
     // if(match[i].departure == undefined || match[i].arrival == undefined) {
      //    res.redirect('../notrain')
     // }else {
          
     // }
//}

res.render('available', {trip})
      
           
     
})

router.get('/add-tickets', async function(req, res, next) {

    var  trips = await JourneyModel.find({_id: req.query.id
   });
   console.log(trips)


res.render('mytickets', {trips})
           
     
})


module.exports = router;
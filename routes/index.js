var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

var Guest = require('../model/guest.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('getWeather', { title: 'GetWeather' });
  res.sendfile('./public/index.html');
});





router.post('/contact',function(req,res){
  res.sendfile('./public/about.html');
})





/*
router.post('/contact',function(req,res){
  console.log("come on");
  var name = req.body.cName,
      email =req.body.cEmail,
      comment = req.body.cComment;

  var newGuest = new Guest({
    name:name,
    email:email,
    comment:comment
  });

  //Save to DB

    newGuest.save(function(err,guest){
      if(err){
        console.log("fail to add new comment");
        return res.redirect('/comment');
      }

      //req.session.guest = newGuest;
      console.log("add Successfully");
      //req.redirect('/comment');


    })
  })
*/

module.exports = router;

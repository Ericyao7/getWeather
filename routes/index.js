var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

var Guest = require('../model/guest.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather',function(req,res){
  var request = require('request');
  var cityName = req.query.wName;
  var QueryURL = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=37186a19b8a2451d4baf57b1d68c9eda';
  request.get(QueryURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var obj = JSON.parse(body);
      var objMain;
      var objDescription;
      var IntTem;
      var Tem;
      if(obj==null){
        objMain = "Sorry We can Not find your city";
        console.log("we will see");
      }else {
        objMain = obj.weather[0].main;

        objDescription = obj.weather[0].description;

        IntTem = parseInt(obj.main.temp) - 273;
        Tem = IntTem + "ºC"
      }
      //var myString = JSON.stringify(obj.weather);

      //console.log(objDescription+"    "+ objMain);
      res.render("weather",{title: cityName,weatherDes:objMain+" "+objDescription,Temperature:Tem});


    }
  });

});


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







module.exports = router;

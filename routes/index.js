var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/weather',function(req,res){
  var request = require('request');
  var cityName = req.query.wName;
  var test = '2172797';

  var QueryURL = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=37186a19b8a2451d4baf57b1d68c9eda';
  request.get(QueryURL, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //res.send(body); // 输出请求到的body
    /*
      var obj = JSON.parse(body);
      var myString = JSON.stringify(obj.weather);

      //console.log(req.query.wName);
      res.render("weather",{json:myString,title: cityName});
    */
      var obj = JSON.parse(body);
      var objMain = obj.weather[0].main;
      var objDescription = obj.weather[0].description;

      var IntTem = parseInt(obj.main.temp)-273;
      var Tem = IntTem+"ºC"

      var myString = JSON.stringify(obj.weather);

      //console.log(objDescription+"    "+ objMain);
      res.render("weather",{title: cityName,weatherDes:objMain+" "+objDescription,Temperature:Tem});


    }
  });

});

module.exports = router;

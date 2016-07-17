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
  var myjson;
  request.get('http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=37186a19b8a2451d4baf57b1d68c9eda', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      //res.send(body); // 输出请求到的body

      var obj = JSON.parse(body);
      res.send(obj);
    }
  });

});

module.exports = router;

/**
 * Created by Ericyao on 7/28/16.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getWeather', function(req, res, next) {
    //res.sendfile('./public/getWeather.html');
    res.render('getWeather',{cityName:' ',weatherDes:' ',Temperature:''});
});

router.get('/getAddRomanNumerals', function (req,res,next) {
    res.render('getAddRomaNumerals',{title:'Instruction'});
})


router.post('/weather',function(req,res){

    var request = require('request');
    var cityName = req.body.cityName;

    var QueryURL = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=37186a19b8a2451d4baf57b1d68c9eda';
    request.get(QueryURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
/*
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

            res.render("getWeather",{cityName:" ",weatherDes:objMain+" "+objDescription,Temperature:Tem});
           */
            res.send(body);

        }
    });

});

module.exports = router;

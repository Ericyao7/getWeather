/**
 * Created by Ericyao on 7/28/16.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getWeather', function(req, res, next) {
    res.render('getWeather', { title: 'GetWeather' });
});

router.get('/getAddRomanNumerals', function (req,res,next) {
    res.render('getAddRomaNumerals',{title:'Instruction'});
})



module.exports = router;

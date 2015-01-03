var express = require('express');
var router = express.Router();

var obj = {
  flash: {
    title: "Goodbye!",
    message: "After over 3 years of service, Cloudsdale must now unfortunately come to a close. "+
    "After declining interest in Cloudsdale and more generally in the Brony community, "+
    "Cloudsdale can no longer afford its server costs. Thank you to everyone who stuck "+
    "with us all these years! The Cloudsdale development team is hard at work on the next "+
    "big thing and we hope to see you there someday. Until then, consider this our very fond "+
    "farewell. We wish you all the best, and remember: be awesome to each other.\n\n"+
    "RIP September 2011 - January 2015"
  },
  status: 400
};

/* GET users listing. */
router.get('/v1/sessions', function(req, res) {
  res.json(obj);
});

router.post('/v1/sessions', function(req, res) {
  res.json(obj);
});

router.put('/v1/sessions', function(req, res) {
  res.json(obj);
});


module.exports = router;

var express = require('express');
var router = express.Router();

var obj = {
  flash: {
    title: "Coming Soon!",
    message: "Check out our website for an announcement!\n\nwww.cloudsdale.org"
  },
  status: 400
};

/* GET users listing. */
router.all('/v1/sessions', function(req, res) {
  res.json(obj);
});


module.exports = router;

var express = require('express');
var router = express.Router();

var images = [
  {
    "image": "/images/1.jpg",
    "attrib": "http://vodyanoyart.deviantart.com/art/Winter-Shy-642316737",
    "height": 1355
  },
  {
    "image": "/images/2.jpg",
    "attrib": "http://vodyanoyart.deviantart.com/art/Winter-Pie-641322369",
    "height": 1295
  },
  {
    "image": "/images/3.jpg",
    "attrib": "http://vodyanoyart.deviantart.com/art/Winter-Jack-643392762",
    "height": 1259
  },
  {
    "image": "/images/4.jpg",
    "attrib": "http://vodyanoyart.deviantart.com/art/Winter-Rar-640419639",
    "height": 1580
  },
  {
    "image": "/images/5.jpg",
    "attrib": "http://vodyanoyart.deviantart.com/art/Winter-Dash-639384585",
    "height": 1563
  },
  {
    "image": "/images/6.jpg",
    "attrib": "http://vodyanoyart.deviantart.com/art/Winter-Twi-643804634",
    "height": 1354
  }
];

/* GET home page. */
router.all('/', function(req, res) {
  var idx = ~~(Math.random() * 6);
  var image = images[idx];
  console.log(JSON.stringify(image));
  res.render('index', {
    title: 'Coming Soon!',
    image: image 
  });
});

module.exports = router;

var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello DAI')
  });
  
  app.listen(3000, function () {
    console.log(`Example app listening on port 3000.`)
  });
  
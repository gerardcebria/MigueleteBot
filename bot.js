var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);
Twitter.post('statuses/update', { status: 'PRUEBA BONG!' }, function(err, data, response) {
    console.log(data)
  })
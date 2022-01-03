"use strict";

var express = require('express');

var path = require('path');

var app = express(); // Serve only the static files form the dist directory

app.use(express["static"]('./dist/'));
app.get('/*', function (req, res) {
  return res.sendFile('index.html', {
    root: 'dist/'
  });
}); // Start the app by listening on the default Heroku port

app.listen(process.env.PORT || 8080);
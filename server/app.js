var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/assignDb');
var Assign = require('../models/assignment');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  console.log("bird is in base url");
  res.sendFile(path.resolve('views/index.html'));
});
app.get('/assignments', function (req, res) {
  Assign.find()
  .then(function (data) {
    res.send(data);
  });
});
app.listen(3000, 'localhost', function (req, res) {
  console.log('server is listening on 3000');

});
app.post('/assignPost', function (req,res) {
  console.log('req.body: ' + req.body.name);
  var assignmentToAdd={
    assignment_number: req.body.number,
    student_name: req.body.name,
    score: req.body.score,
    date_completed: req.body.date
  };
  var newAssign = Assign( assignmentToAdd);
  newAssign.save();
});
app.use(express.static('public'));

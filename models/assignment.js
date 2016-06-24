var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assignSchema = new Schema ({
  assignment_number: Number,
  student_name: String,
  score: Number,
  date_completed: Date

});
var Assign = mongoose.model('assign', assignSchema);

module.exports= Assign;

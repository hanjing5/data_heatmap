var mongoose = require('mongoose')

var Schema = mongoose.Schema
      , ObjectId = Schema.ObjectId;


mongoose.connect('mongodb://localhost/peopledata')
var db = mongoose.connect;

var kittySchema = mongoose.Schema({
      lname: String
})
//kittySchema.methods.speak = function () {
//  var greeting = this.name
//    ? "Meow name is " + this.name
//    : "I don't have a name"
//  console.log(greeting);
//}
//
var Kitten = mongoose.model('Test', kittySchema);
//var silence = new Kitten({ name: 'Silence' })
//console.log(silence.name)
//var fluffy = new Kitten({name:'fluffy'});
//fluffy.speak()
//
//fluffy.save(function( err, fluffy) {
//  if (err)
//  fluffy.speak();
//});

var query = Kitten.findOne();
query.select('lname');

query.exec(function (err, cat) {
  if (err) return handleError(err);
  console.log('cat is %s.', cat.lname) // Space Ghost is a talk show host.
})
//
//var Person = new Schema({
//  user_id : String,
//  lname : String,
//  fname: String,
//  updated_at :Date
//});
//
//
//var test = new Schema({
//  user_id : ObjectId,
//  lname : String,
//  updated_at :Date
//});
//
//mongoose.model('Person', Person)
//mongoose.model('test', test)
//
//
//var myModel = mongoose.model('Person');
//var testModel = mongoose.model('test');
//
//var t = testModel.find({lname: /^CHEN/});
//
//console.log(t.fname);

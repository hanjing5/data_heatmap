var mongojs = require('mongojs');
//var db = mongojs('peopledata', ['test']);

DataProvider = mongojs('peopledata', ['bay_out']).bay_out;

//db.test.findOne(function(err, docs) {
//  console.log(docs.lname);
  //console.log(docs);
//});

exports.DataProvider = DataProvider;

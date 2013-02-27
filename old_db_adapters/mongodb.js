var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

var DataAccessObject = function(db_name, host, port, callback){
  this.db = new Db(db_name, new Server(host, port, {auto_reconnect: true}, {}));
  this.db.open(callback);
}

DataAccessObject.prototype.getCollection = function(callback) {
  this.db.collection('test', function(error, data_collection) {
    if( error ) callback(error);
    else callback(null, data_collection);
  });
};

DataAccessObject.prototype.count = function(callback)
{
  return this.getCollection().count();
}


var dao = new DataAccessObject("peopledata", "localhost", 27017, function() {
  console.log(dao);
  console.log(dao.count());
      dao.findAll("test",function() {console.log(arguments);});
});



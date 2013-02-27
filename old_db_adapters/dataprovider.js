var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

DataProvider = function(host, port) {
  this.db = new Db('peopledata', new Server(host, port, {auto_reconnect: true},{}), {safe:false});
  this.db.open(function(){});
};

DataProvider.prototype.getCollection = function(callback) {
  this.db.collection('test', function(error, data_collection) {
    if( error ) callback(error);
    else callback(null, data_collection);
  });
};


DataProvider.prototype.findOne = function(callback) {
  this.getCollection(function(error, data_collection) {
    if ( error ) callback(error);
    else {

      var methods = [];
      for (var m in data_collection) {
        if (typeof data_collection[m] == "function") {
          methods.push(m);
        }
      }
      console.log(methods.join(","));

      console.log(data_collection.stats());
      console.log(data_collection.indexExists());
      //console.log(data_collection.findOne({_id: new ObjectID("50d258e34b2cfb3f02710827")}, console.log));

      data_collection.findOne().toArray(function(error, results) {
        if (error ) callback(error)
        else callback (null, results)
      });
    }
  });
};
var dp = new DataProvider("127.0.0.1", 27017);
console.log(dp.findOne());
//console.log(dp.count());
//console.log(DataProvider.findOne());

exports.DataProvider = DataProvider;


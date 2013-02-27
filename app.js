
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http');

var app = express();

var DataProvider = require('./db').DataProvider;

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

function bay_zip(){
  bay_list = []

  return
}

var fs = require('fs');
var bay_area_zip = [];
fs.readFile('bay_area_zip.csv', 'utf8', function (err,data) {
    if (err) {
          return console.log(err);
            }
      x = data.split(',');
      for (i = 0; i < x.length; i++){
        bay_area_zip.push(parseInt(x[i]))
      }
      //console.log(bay_area_zip);
});

function include(arr,obj) {
      return (arr.indexOf(obj) != -1);
}
app.get('/', function(req, res) {
  console.log(bay_area_zip);
  DataProvider.find({"rzip5": {"$in": bay_area_zip}}, function(error, docs) {
    //console.log(docs.length);
    //console.log(docs[1]);
    var data = "[[ 'Zip' , 'Population', 'Area'],";
    for (i = 0; i < docs.length; i++){
      //console.log(docs[i]);
      //console.log(docs[i].rzip5);
      var z = docs[i];
      var e = "[ '" + z.rzip5+"',"+z.total_pop+"," +z.total_pop + "],";
      data += e;
    }
    data = data.substring(0, data.length-1) + "]";
    res.render('index.jade', {
                title: 'Data',
                articles:docs,
                foo: 2000000,
                data_list :data
    });
  })

});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

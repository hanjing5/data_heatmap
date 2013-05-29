fs = require('fs');
fs.readFile('bay_area_zip.csv', 'utf8', function (err,data) {
  if (err) {return console.log(err);}
  x = data.split(',');
  console.log(x);
});


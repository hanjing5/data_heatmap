fs = require('fs');
fs.readFile('bay_area_zip.csv', 'utf8', function (err,data) {
    if (err) {
          return console.log(err);
            }
      //console.log(data);
      x = data.split(',');
      console.log(x);
});


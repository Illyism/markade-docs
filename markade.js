var http = require("https");

var data = {
  "name": "Sample Markade Site",
  "directories": {
    "output": "public",
    "template": "templates",
    "data": "data"
  },
  "version": 0,
  "templates": {
    "index.jade": [
      "index.md",
      "second.md"
    ]
  }
}

module.exports = function(callback) {
  var req = http.request({
    "host": "raw.githubusercontent.com",
    "path": "http://rav.githubusercontent.com/Illyism/markade/master/package.json",
  }, function(res) {
    res.on("data", function(pkg) {
      var json = JSON.parse(pkg.toString());
      data.pkg = json;
      data.version = json.version;
      callback(null, data);
    })
  });
  req.end();
};
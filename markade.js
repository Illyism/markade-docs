var http = require("https");

var data = {
  "name": "Markade | Node.js, Jade, YAML and Markdown based Static Site Generator",
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
};

module.exports = function(callback) {
  var req = http.request({
    "host": "raw.githubusercontent.com",
    "path": "http://raw.githubusercontent.com/Illyism/markade/master/package.json",
  }, function(res) {
    var body = "";
    res.on("data", function(pkg) {
      body += pkg.toString();
    });
    res.on("end", function() {
      var json = JSON.parse(body);
      data.pkg = json;
      data.version = json.version;
      callback(null, data);
    });

  });
  req.end();
};
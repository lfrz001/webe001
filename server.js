
var express = require('express');
var app = express();
var port = 18080;
app.use(express.static('public'));
console.log(__dirname);
app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

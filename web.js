var express = require('express');
var fs = require('fs');
var buffer= new Buffer();

var app = express();
app.use(express.logger());




fs.readFileSync('index.html','utf8',function(err,data){
if (err){
    return console.log(err);

}
//console.log(data);
//buffer=new Buffer(data.length);
buffer.write(data,"utf-8");
console.log(buffer.toString('utf-8'));
});


app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

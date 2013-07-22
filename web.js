var express = require('express');
var fs = require('fs');
var buffer= new Buffer(25);
var app = express();
app.use(express.logger());




fs.readFileSync('index.html','utf8',function(err,data){
if (err){
    return console.log(err);

}
buffer.write(data,"utf-8");
//streaming = data;
});


app.get('/', function(request, response) {
  response.send(buffer.toString());
});




var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

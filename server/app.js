var express = require('express');

var app = express();
var fs = require('fs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
   res.sendFile(__dirname + '/public/assets/views/index.html');
});

app.get ('/kittehs/:id', function(req, res, next) {
    //fs.readFile('file', 'utf8', function (err, data) {
    //    if (err){
    //        next(err);
    //    }
    //    var obj = JSON.parse(data);
    //    res.json(obj);
    //});
    console.log(req.params.id)
    res.send(req.params.id);
});

app.get('/:id', function(req, res, next) {
    //var id = req.params.id;
    //fs.readFile('file', 'utf8', function (err, data) {
    //    if (err){
    //        next(err);
    //    }
    //    var obj = JSON.parse(data);
    //    var kitteh = obj[id];
    //    res.json(kitteh);
    //});
    res.send(req.params.id);
});

var server = app.listen(3000, function(){
   var port = server.address().port;
    console.log('Listening on port: ', port);
});

module.exports = app;

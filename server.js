







const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT;
const Clarifai = require("clarifai");
const clarifai = new Clarifai.App({
    apiKey: 'c9a7740b61cd42139a16a93d5a2da926'
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


// app.get('/', function(req, res){
//     res.sendFile('index.html');
// });

app.get('/', function(req, res){
    res.sendFile('index.html');
});


app.listen(port, function(){
    console.log('server has started at port ' + port);
});
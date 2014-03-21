var express = require('express');
var http = require("http");
var engine = require('ejs-locals');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.use(require('express-blocks'));

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', engine);

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000);
console.log('Listening on port 3000');
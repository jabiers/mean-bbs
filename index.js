var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var routes = require('./routes/index');
var items = require('./routes/items');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'html');

app.use('/', routes);
app.use('/item', items);

app.use(bodyParser.json());
//
// app.get('/', function(request, response) {
//   response.send('Hello World!')
// })

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

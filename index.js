var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	session = require('express-session'),
	app = express(),
	port = 3000,
	corsOptions = {
		origin: 'http://localhost:3000'
	},
	config = require('./config.js'),
	profileCtrl = require('./controllers/profileCtrl.js'),
	userCtrl = require('./controllers/userCtrl.js');


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ 
	secret: config.sessionSecret,
	saveUninitialized: config.saveUninitialized,
	resave: config.resave
}));
app.use(express.static(__dirname + '/public'));


app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);

app.listen(port, function() {
	console.log('Listening on port ', port);
})
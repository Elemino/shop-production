var keystone = require('keystone');
var mongoose = require('mongoose');

keystone.init({

	'name': 'Earo',
	'brand': 'Earo',
	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',
	'emails': 'templates/emails',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET,

});

keystone.import('models');


var User = keystone.list('User');
new User.model().save();

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

keystone.set('routes', require('./routes'));


keystone.init({

	'cloudinary config': 'cloudinary://726856275187511:IVP8UuvsbIrU1UOx7v-SxT_s2fU@earo/',

});


keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7',
		},
	},
});


const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });


app.prepare()
	.then(() => {
		
keystone.set('email tests', require('./routes/emails'));

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	galleries: 'galleries',
	enquiries: 'enquiries',
	users: 'users',
});


keystone.start();
});


var uristring = process.env.MONGOLAB_URI || 'mongodb://smf2:mlab123E@ds029466.mlab.com:29466/smf';

mongoose.createConnection(uristring, function (err, res) {
	useNewUrlParser: true; 
	if (err) {
		console.log('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log('Succeeded connected to: ' + uristring);
	}
});

process.on('SIGINT', function () {
	mongoose.connection.close(function () {
		console.log('Mongoose default connection disconnected through app termination');
		process.exit(0);
	});
});


keystone.set('cors allow origin', true);


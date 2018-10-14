var _ = require('lodash');

exports.initLocals = function (req, res, next) {

	var locals = res.locals;

	res.locals.navLinks = [{
		label: 'Home',
		key: 'home',
		href: '/home',
	},
	{
		label: 'Contact',
		key: 'contact',
		href: '/contact',
	},
	{
		label: 'Products',
		key: 'product',
		href: '/products',
	},

	];

	if (req.user) {
		locals.navLinks.push({
			label: 'Myorder',
			key: 'myorders',
			href: '/myorders',
		});
	}
	locals.user = req.user;
	if (req.session.cart === undefined) req.session.cart = [];
	res.locals.grandtotal = 0;
	req.session.cart.forEach(function (product) {
		res.locals.grandtotal += product.price;
	});
	next();

};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) {
		return msgs.length;
	}) ? flashMessages : false;
	next();
};

/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};

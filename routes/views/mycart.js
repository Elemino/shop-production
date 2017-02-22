var keystone = require('keystone');
var Product = keystone.list('Product');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'mycart';
	locals.title = 'mycart';

  locals.products = req.session.cart;


	// Render the view
	view.render('mycart');
};

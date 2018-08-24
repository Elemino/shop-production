var keystone = require('keystone');
var Product = keystone.list('Product');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'products';
	locals.title = 'products';


	view.on('init', function (next) {

		Product.paginate({
			page: req.query.page || 1,
			perPage: 3,
			maxPage: 10,
		}).exec(function (err, res) {
			locals.products = res;
			next(err);
		});
	});


	// Render the view
	view.render('products');
};

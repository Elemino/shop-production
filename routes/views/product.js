var keystone = require('keystone');


exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'product';


	view.on('init', function(next) {
    var q = keystone.list('Product').model.findById(req.params.product_id);

    q.exec(function(err, result) {

      locals.product = result;
      next(err);
    });
});
  view.render('product')

};

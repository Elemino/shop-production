var keystone = require('keystone');
var Product = keystone.list('Product');
var Order = keystone.list('Product');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;


	view.on('init', function(next) {
    var q = keystone.list('Order').model.findById(req.params.product_id);

    q.exec(function(err, result) {

      locals.product = result;
      next(err);
    });
});
  view.render('order')

};

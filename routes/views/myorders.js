var keystone = require('keystone');
var Order = keystone.list('Order');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
  if(req.user == undefined){
    view.render("errors/404");
    return
  }

  console.log("loggedin user = "+req.user.mail);


	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'myorders';
	locals.title = 'Myorders';


	view.on('init', function(next) {
		Product.paginate({
			page:req.query.page||1,
			perPage:2,
			maxPage:10
		})
    .where('customer', req.user.id)
    .sort('-publishedDate')
    .exec(function(err,res){
			locals.products = res;
			next(err);
		});
	})





	// Render the view
	view.render('myorders');
};

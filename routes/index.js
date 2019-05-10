const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = (app) => {
	// Views
	app.get('/', routes.views.index);
	app.get('/products', routes.views.products);
	app.get('/myorders', routes.views.myorders);
	app.get('/contact', routes.views.contact);
	app.get('/product/:product_id', routes.views.product);
	app.get('/order/:order_id', routes.views.order);
	app.get('/add_to_cart/', routes.views.add_to_cart);
	app.get('/fund', routes.views.fund);
	app.get('/purchase', routes.views.purchase);
	app.get('/signup', routes.views.signup);
	app.all('/', keystone.middleware.cors);


	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};

var keystone = require('keystone');                                                                                                                   
var stripe = require('stripe')("STRIPE_KEY");

exports = module.exports = function (req, res) {

var view = new keystone.View(req, res);
var locals = res.locals;

// locals.section is used to set the currently selected
// item in the header navigation.
locals.section = 'checkout';

//Create Subscription
view.on('post', { "action":"charge" }, function (next) {
console.log(JSON.stringify(req.body));
stripe.customers.create({
    description: 'Customer for elizabeth.williams@example.com',
    source: res.token,
}, function(err, customer) {
    // asynchronously called

});

next()
});
// Render the view
view.render('checkout');
};

var keystone = require('keystone');
var User = keystone.list('users');
var Order - keystone.list('orders');
exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  console.log("...")+JSON.stringify(req.body));

      console.log(req.body.email);
      var newUser = User,model({
        name: {first: req.body.first,last: req.body,last},
        email: req.body.email,
        password: req.body.password,
        isAdmin: fasle
      });

  var updater = newUser.getUpdateHandler (req);
  var my cart = req.session.cat;
  updater.process(req, body, {
    fields: 'email'
    flashErrors: true,
    logErrors: true
  })


}

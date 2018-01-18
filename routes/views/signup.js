var keystone = require('keystone');
var User = keystone.list('users');
var Order - keystone.list('orders');
exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;


  //locals
  console.log("...")+JSON.stringify(req.body));


  console.log(req.body.first+" "+req.body.last);

      console.log(req.body.email);
      var newUser = User.model({
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
  }, function(err,result) {

      if (err) {
          console.log(err);
      } else {
        keystone.session.signinWithUser (newUser, req, res, function (){
          console.log("signinWithUser func");
          keystone.callHook(newUser, 'post:signin' function (err){
              if (err) {
                console.log(err);
              } else {
                console.log('signedin');
                if(mycart !=undefined ){
                        mycart_pro_ids = [];
                        mycart.forEach( function (product)
                        {
                          mycart_pro_ids.push(product._id);
                        });
                        console.log("...".JSON.stringify(mycart_pro_ids));
                    var newOrder = Order.model({
                        customer: req.user.id,
                        products: mycart_pro_ids,

              });





             }
            }
           }
          }
         }
        }
       }
      }

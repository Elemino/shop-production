var keystone = require('keystone');
var async = require('async');

var Order = keystone.list();
var OrderItem = keystone.list('OrderItem');
exports = module.exports = function(req, res) {

    var view = new keystone.View(req,res);
    var locals = res.locals;

    var final = function (){
        res.redirect('/');
    }

    if(req.session.cart !=undefined ){
        mycart_item_ids = [];
        async.forEach(req.session.cart, function (item, callback){
            console.log(JSON.stringify(item));
        })
    }


}
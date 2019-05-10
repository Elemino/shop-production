var keystone = require('keystone');
var async = require('async');

let Order = keystone.list();
let OrderItem = keystone.list('OrderItem');
exports = module.exports = function (req, res) {

	let view = new keystone.View(req, res);
	let locals = res.locals;

    let final = function () {
	res.redirect('/');
};

	if (req.session.cart != undefined ){
        mycart_item_ids = [];
        async.forEach(req.session.cart, function (item, callback){
            console.log(JSON.stringify(item));
        })
    }


}
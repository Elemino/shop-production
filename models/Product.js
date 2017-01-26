var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = new keystone.List('Product');

Product.add({
	name: { type: Types.Text, required: true,initial:true },
	price: { type: Types.Number, required: true,initial:true },
	description: { type: String },

});

Product.defaultSort = '-createdAt';
Product.defaultColumns = 'name, price, description';
Product.register();

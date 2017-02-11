var keystone = require('keystone');
var Types = keystone.Field.Types;


var Product = new keystone.List('Product', {

	map: {name: 'title'},
	singular: 'Product',
	plural: 'Products',
	autokey: {path: 'slug', from: 'title', unique: true}

});

Product.add({
	name: { type: Types.Text, required: true, initial: true },
	price: { type: Types.Number, initial: true, required: true },
	qty: {type: Number},
	description: { type: String, wysiwyg: true, height: 300 },
	image: {type: Types.CloudinaryImage},
	publishedDate: {type: Date, default: Date.now}
});

// Provide access to Keystone
Product.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Registration
 */

Product.defaultColumns = 'name, price, description';
Product.register();

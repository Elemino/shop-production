var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */
var Product = new keystone.List('Product');

Product.add({
	name: { type: Types.Text, required: true, initial: true },
	price: { type: Types.Number, initial: true, required: true, },
	description: { type: String }
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

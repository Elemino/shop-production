var keystone = require('keystone');
var Types = keystone.Field.Types;

<<<<<<< HEAD
<<<<<<< HEAD
var Order = new keystone.List('Order',{nocreate:true, noedit:true});
=======
=======
>>>>>>> parent of f9bcb92... Update Models
/**
 * Order Model
 * ==========
 */
var Order = new keystone.List('Order');
>>>>>>> parent of f9bcb92... Update Models

Order.add({
	customer:{ type:Types.Relationship, ref:'User', many:false, index:true, initial:true}
  products:{ type:Types.Relationship, ref:'Product', many:true, index:true, initial:true,   },

});


/**
 * Registration
 */
 Order.defaultSort = '-createdAt';
 Order.defaultColumns = 'customer,Products';
 Order.register();

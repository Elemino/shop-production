function add_to_cart(product_id,product_price){
      var total = parseFloat($('#cart_total').html());
      total += parseFloat(product_price);
      $.get("add_to_cart?product_id="+product_id, function(string) {

      $('#cart_total').html(total);
      })

}

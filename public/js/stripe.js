
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

stripe.createToken(card).then(function(result) {
    if (result.error) {

        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
    } else {
        // Send the token to your server
        onReceiveToken(result.token);
        }
    });
});
var onReceiveToken = function(token, args) {

    $.ajax({
        url: '/checkout',
        type: 'POST',
        data: {
            action: 'charge',
            stripeToken: token.id
        },
        success: function(data) {
           console.log('Returns contents of cart.pug');
        }
    })
};

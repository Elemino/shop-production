// Handle form submission
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

stripe.createToken(card).then(function(result) {
    if (result.error) {
        // Inform the user if there was an error
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
    } else {
        // Send the token to your server
        onReceiveToken(result.token);
        }
    });
});
var onReceiveToken = function(token, args) {
    // Submit token to server so it can charge the card
    $.ajax({
        url: '/checkout',
        type: 'POST',
        data: {
            action: 'charge',
            stripeToken: token.id
        },
        success: function(data) {
           console.log('Returns the HTML content of checkout.jade');
        }
    })
};

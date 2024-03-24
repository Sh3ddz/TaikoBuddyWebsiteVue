<template>
    <div class="tokens-div">
        <h1><u>Purchase Taiko Tokens</u></h1>
        <h2 id="currentTokens">
            <center>You currently have <span>x</span> Taiko Tokens!</center>
        </h2>
        <p>
            <center><span>Taiko Tokens are used as currency to activate ALL TaikoBuddy Software!</span></br>This
                includes OsuBuddy, TaikoBuddy, and AimBuddy.</center>
        </p>
        <p>
            <center>Payments are no longer accepted as paypal has banned my account.</center>
        </p>
        <h2 id="subbed">hi</h2>

        <div class="paypal-button-container">
            <div id="paypal-button-container">
                <div id="smart-button-container">
                    <div style="text-align: center;">
                        <div style="margin-bottom: 1.25rem;">
                            <p></p>
                            <select id="item-options" class="item-options">
                                <option value="10 Taiko Tokens" price="10">10 Taiko Tokens - $10</option>
                                <option value="30 Taiko Tokens" price="25">30 Taiko Tokens - $25</option>
                                <option value="60 Taiko Tokens" price="45">60 Taiko Tokens - $45</option>
                                <option value="120 Taiko Tokens" price="80">120 Taiko Tokens - $80</option>
                            </select>
                            <select style="visibility: hidden" id="quantitySelect"></select>
                        </div>
                    </div>
                </div>
                <component :is="'script'">

                    src="https://www.paypal.com/sdk/js?client-id=ATL06T4XziyRgH0kOnOuLRHaJlM0nsSw7sUliOC1cUmKKTzGUaECSctbOW9-ymrkG4CrViTyKmY3sNfY&currency=USD"
                    data-sdk-integration-source="button-factory"></component>
                <component :is="'script'">
                        function initPayPalButton() {
                            var shipping = 0;
                            var itemOptions = document.querySelector("#smart-button-container #item-options");
                            var quantity = parseInt();
                            var quantitySelect = document.querySelector("#smart-button-container #quantitySelect");
                            if (!isNaN(quantity)) {
                                quantitySelect.style.visibility = "visible";
                            }
                            var orderDescription = '';
                            if(orderDescription === '') {
                                orderDescription = 'Taiko Tokens';
                            }
                            paypal.Buttons({
                                style: {
                                    shape: 'rect',
                                    color: 'gold',
                                    layout: 'vertical',
                                    label: 'paypal',

                                },
                                createOrder: function(data, actions) {
                                    var selectedItemDescription = itemOptions.options[itemOptions.selectedIndex].value;
                                    var selectedItemPrice = parseFloat(itemOptions.options[itemOptions.selectedIndex].getAttribute("price"));
                                    var tax = (0 === 0) ? 0 : (selectedItemPrice * (parseFloat(0)/100));
                                    if(quantitySelect.options.length > 0) {
                                        quantity = parseInt(quantitySelect.options[quantitySelect.selectedIndex].value);
                                    } else {
                                        quantity = 1;
                                    }

                                    tax *= quantity;
                                    tax = Math.round(tax * 100) / 100;
                                    var priceTotal = quantity * selectedItemPrice + parseFloat(shipping) + tax;
                                    priceTotal = Math.round(priceTotal * 100) / 100;
                                    var itemTotalValue = Math.round((selectedItemPrice * quantity) * 100) / 100;

                                    return actions.order.create({
                                        purchase_units: [{
                                            description: orderDescription,
                                            amount: {
                                                currency_code: 'USD',
                                                value: priceTotal,
                                                breakdown: {
                                                    item_total: {
                                                        currency_code: 'USD',
                                                        value: itemTotalValue,
                                                    },
                                                    shipping: {
                                                        currency_code: 'USD',
                                                        value: shipping,
                                                    },
                                                    tax_total: {
                                                        currency_code: 'USD',
                                                        value: tax,
                                                    }
                                                }
                                            },
                                            items: [{
                                                name: selectedItemDescription,
                                                unit_amount: {
                                                    currency_code: 'USD',
                                                    value: selectedItemPrice,
                                                },
                                                quantity: quantity
                                            }]
                                        }]
                                    });
                                },
                                onApprove: function(data, actions) {
                                    return actions.order.capture().then(function(details) {
                                        connection.send("PURCHASE TOKENS:"+currentUser+","+data.orderID);
                                        alert('Transaction completed by ' + details.payer.name.given_name + '!');
                                    });
                                },
                                onError: function(err) {
                                    console.log(err);
                                },
                            }).render('#paypal-button-container');
                        }
                        initPayPalButton();
                    </component>
                <p>
                    <center>
                        <span2>Warning: if you attempt to change the checkout value, the purchase will not go through
                            and you will not receive the Taiko Tokens.<br> You will not be refunded if you do this.
                        </span2>
                    </center>
                </p>
            </div>
        </div>
        <button id="checkout-button">Checkout</button>
        <component :is="'script'">
                // Create an instance of the Stripe object with your publishable API key
                var stripe = Stripe('pk_test_51Ir8KbES1KmAli6BKg03VoFBjBNWUiKLKsPn78WPptM20gsRTYJJ1FSboIpFKObYHeTrbKRRDteu9CiaI5kYamAc00Fgx5BK4C');
                var checkoutButton = document.getElementById('checkout-button');
          
                checkoutButton.addEventListener('click', function() {
                  // Create a new Checkout Session using the server-side endpoint you
                  // created in step 3.
                  fetch('/create-checkout-session', {
                    method: 'POST',
                  })
                  .then(function(response) {
                    return response.json();
                  })
                  .then(function(session) {
                    return stripe.redirectToCheckout({ sessionId: session.id });
                  })
                  .then(function(result) {
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, you should display the localized error message to your
                    // customer using `error.message`.
                    if (result.error) {
                      alert(result.error.message);
                    }
                  })
                  .catch(function(error) {
                    console.error('Error:', error);
                  });
                });
        </component>
        <h1><u>Redeem Taiko Tokens</u></h1>
        <button id="10Tokens" onclick="redeemTokens(10, 'TaikoBuddy 1 Month')">Redeem 10 Taiko Tokens (1 Month)</button>
        </br>
        <button id="30Tokens" onclick="redeemTokens(30, 'TaikoBuddy 3 Month')">Redeem 30 Taiko Tokens (3
            Months)</button> </br>
        <button id="60Tokens" onclick="redeemTokens(60, 'TaikoBuddy 6 Month')">Redeem 60 Taiko Tokens (6
            Months)</button> </br>
        <button id="120Tokens" onclick="redeemTokens(120, 'TaikoBuddy 12 Month')">Redeem 120 Taiko Tokens (1
            Year)</button> </br>

    </div>
</template>

<script lang="ts">

export default
    {
        name: "Tokens",
    }
</script>

<style scoped>
.tokens-div button{
    display:inline-block;
    padding:0.46em 1.6em;
    border:0.1em solid #000000;
    margin:0 0.2em 0.2em 0;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    color:#DCDCDC;
    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
    background-color:#323232;
    text-align:center;
    transition: all 0.15s;
    width: 35%;
    height: 50px;
}
.tokens-div button:hover{
    text-shadow: 0 0 2em rgba(255,255,255,1);
    color:#FFFFFF;
    border-color:#FFFFFF;
}
.item-options{
    background-color:#323232;
}
</style>
// frontend/components/Pago.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your-public-stripe-key');

const Pago = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleClick = async (e) => {
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: 'price_id', // Este ID debe ser el de tu precio en Stripe
                    quantity: 1,
                },
            ],
            mode: 'payment',
            successUrl: `${window.location.origin}/success`,
            cancelUrl: `${window.location.origin}/cancel`,
        });
        if (error) console.log(error);
    };

    return <button onClick={handleClick}>Pagar con Stripe</button>;
};

export default Pago;

import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const price = cart.reduce((total, product) => total + product.price, 0);
    console.log(price)
    let shippingCost = 0;
    if (price > 500) {
        shippingCost = 0;
    }
    else if (price > 100) {
        shippingCost = 11.99;
    }
    else if (price > 0) {
        shippingCost = 4.99;
    }
    const tax = price / 10;
    const total = tax + price;
    const format = (num) => {
        const formatNumber = num.toFixed(2);
        return formatNumber;
    };

    return (
        <div style = {{width:'400px',margin:'0 auto'}}>
            <h3>This is shopping cart</h3>
            <p>Items Summary: {cart.length}</p>
            <p><small>Tax + vat :{format(total)}</small></p>
            <p>shipping cost: {format(shippingCost)}</p>
            <p>Total Price: {format(price+shippingCost+total)}</p>
        </div>
    );
};

export default Cart;
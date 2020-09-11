import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    let total = 0;
    for (let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price*product.quantity ;
    
    }
    let shippingCost = 0;
    if (total > 500) {
        shippingCost = 0;
    }
    else if (total > 100) {
        shippingCost = 11.99;
    }
    else if (total > 0) {
        shippingCost = 4.99;
    }
    const tax = total / 10;
    const Grandtotal = tax + total;
    const format = (num) => {
        const formatNumber = num.toFixed(2);
        return formatNumber;
    };
    
    return (
        <div style = {{width:'400px',margin:'0 auto'}}>
            <h3>This is shopping cart</h3>
            <p>Items Summary: {cart.length}</p>
            <p>Product price: {total}</p>
            <p><small>Tax + vat :{format(tax)}</small></p>
            <p>shipping cost: {format(shippingCost)}</p>
            <p>Total Price: {format(shippingCost + Grandtotal)}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;
import React, { useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItems/ReviewItem';
import Cart from '../Cart/Cart'

const Review = () => {
    const  [cart, setCart]  = useState([])
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const cartProduct = productKeys.map(keys => {
            const product = fakeData.find(pd => pd.key === keys);
            product.quantity = saveCart[keys]
            return product
        });
        setCart(cartProduct);
    },[])
    return (
        <div style={{display:'flex'}}>
            <div>
            {
                cart.map(pd => <ReviewItem product ={pd}></ReviewItem>)
            }
            </div>
            <Cart cart = {cart}></Cart>
        </div>
    );
};

export default Review;
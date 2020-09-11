import React, { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItems/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'

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
    }, [])
    const removeProduct = (productKey) => {
        console.log("clicked", productKey)
        const newCart = cart.filter(pd => pd.key !== productKey)
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }
    const [orderPlace, setOrderPlace] = useState(false);
    const placeHandler = () => {
        setCart([])
        setOrderPlace(true);
        processOrder();
    }
    let thankYou;
    if (orderPlace) {
         thankYou = <img src={happyImage} alt=""/>
    }
    return (
        <div className="review-cart-container">
            <div className="review-container"> 
                {
                    cart.map(pd => <ReviewItem removeProduct = {removeProduct} product ={pd}></ReviewItem>)
                }
                {
                    thankYou
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={placeHandler}>Order Place</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;
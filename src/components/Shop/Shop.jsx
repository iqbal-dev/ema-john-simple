import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
        const productSum = newCart.filter(pd => pd.key === product.key);
        console.log(productSum);
        const count = productSum.length;
        addToDatabaseCart(product.key,count)
    } 
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                    products.map(pd => <Products key={pd.key} showAddToCart={true} product={pd} handleAddToCart = {handleAddToCart}></Products>
                    )
                    }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
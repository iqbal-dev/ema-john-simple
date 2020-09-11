import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const handleAddToCart = (product) => {
        
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct === true) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others,sameProduct];
            
        console.log(count)
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
            console.log(product.quantity)
        }
        setCart(newCart);
        addToDatabaseCart(product.key,count)
    } 
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cartProduct = productKey.map(key => {
            const product = fakeData.find(pdkey => pdkey.key === key);
            product.quantity = savedCart[key]
            return product

        })
        setCart(cartProduct);
    },[])
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                    products.map(pd => <Products key={pd.key} showAddToCart={true} product={pd} handleAddToCart = {handleAddToCart}></Products>
                    )
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to="/review">
                <button>Order Review</button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
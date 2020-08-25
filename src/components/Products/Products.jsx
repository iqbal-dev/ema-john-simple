import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const { name, img, seller,price,stock } = props.product;
    return (
        <div className = "product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div>
                <h5 className = "product-name">{name}</h5>
                <p> <small>by: {seller}</small> </p>
                <br />
                <p><small>${price}</small></p>
                <br />
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)}><FontAwesomeIcon
                    icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Products;
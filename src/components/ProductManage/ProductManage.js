import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductManage = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const product = fakeData.find(data => data.key === productKey);
        setProduct(product);
    }, [])
    console.log(product)
    return (
        <div>
            <h1>Your Product is found</h1>
            <Products showAddToCart={false} product={product}></Products>
        </div>
    );
};

export default ProductManage;
import React from 'react';

const ReviewItem = (props) => {
    console.log(props)
    const{name,quantity,img,price} = props.product;
    return (
        <div style={{ display:'flex',margin: '0 100px', marginBottom:'5px',paddingBottom:'5px',borderBottom:'1px solid lightgray'}}>
            <div style={{marginRight:'50px'}}>
                <img src={img} alt=""/>
            </div>
            <div>
            <h5 className="product-name">{name}</h5>
            <br />
                <p>Quantity: {quantity}</p>
                <br />
                <p>Price: {price}</p>
                <button>Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;
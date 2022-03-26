import React from 'react';
import './Product.css'

const Product = (props) => {
    const { id, image, name, price } = props.data;
    return (
        <div className='product-card'>
            <div className="product-image">
                <img src={image} alt="" />
            </div>
            <div className="product-desc">
                <h3>{name}</h3>
                <p>{price} TK</p>
                <button onClick={() => props.click(id)}>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
import React from 'react';
import './Shop.css'

const Shop = (props) => {
    const { id, image, name, price } = props.data;
    return (
        <div className='product-card'>
            <img src={image} alt="" />
            <div className="product-desc">
                <h3>{name}</h3>
                <p>{price} TK</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Shop;
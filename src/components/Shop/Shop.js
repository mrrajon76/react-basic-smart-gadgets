import React from 'react';

const Shop = (props) => {
    const { id, image, name, price } = props.data;
    return (
        <div>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <p>{price} TK</p>
            <button>Add to cart</button>
        </div>
    );
};

export default Shop;
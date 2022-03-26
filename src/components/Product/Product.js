import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // destructuring props
    const { data, click } = props;

    // destructuring products data
    const { image, name, price } = data;

    return (
        <div className='product-card'>
            <div className="product-image">
                <img src={image} alt="" />
            </div>
            <div className="product-desc">
                <h3>{name}</h3>
                <p>{price} TK</p>
                <button onClick={() => click(data)}>Add to cart &nbsp;<FontAwesomeIcon icon={faCartPlus} /></button>
            </div>
        </div>
    );
};

export default Product;
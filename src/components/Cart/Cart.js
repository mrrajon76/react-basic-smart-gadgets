import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'

const Cart = ({ data }) => {
    return (
        <div className='cart'>
            <h2>Cart Details</h2>
            {
                data.map(product => {
                    return (
                        <div className='cart-product'>
                            <img src={product.image} alt="" />
                            <p>{product.name}</p>
                            <p><FontAwesomeIcon icon={faTrash} /></p>
                        </div>
                    )
                }

                )
            }
        </div>
    );
};

export default Cart;
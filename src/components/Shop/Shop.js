import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const cartButtonClick = (addProductToCart) => {
        const newCart = [...cart, addProductToCart];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} data={product} click={cartButtonClick}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Cart Details</h2>
                {
                    cart.map(product => <h4>{product.name}</h4>)
                }
            </div>
        </div>
    );
};

export default Shop;
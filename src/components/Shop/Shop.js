import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        if (cart.length < 4) {
            const sameProduct = cart.find(product => product.id === addProductToCart.id)
            if (!sameProduct) {
                const newCart = [...cart, addProductToCart];
                setCart(newCart);
            }
            else {
                alert('Sorry! This product is already in the cart. Try to add a new one.')
            }
        }
        else {
            alert('Sorry! You can only add 4 products to the cart')
        }
    }

    return (
        <div className="shop-container">
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} data={product} click={cartButtonClick}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart data={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
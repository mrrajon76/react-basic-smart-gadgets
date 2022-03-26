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
    const deleteFromCart = (deleteItem) => {
        const remainingItems = cart.filter(item => item.id !== deleteItem.id);
        setCart(remainingItems);
    }

    const chooseLuckyOne = () => {
        const luckyNumber = cart[Math.floor((Math.random() * 4))];
        const luckyProductName = luckyNumber.name;
        alert('Your Lucky Product is: ' + luckyProductName);
    }
    // const resetCart = () => {
    //     const empty = [];
    //     setCart(empty);
    // }

    return (
        <div className="shop-container">
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} data={product} click={cartButtonClick}></Product>)
                }
            </div>
            <div className='cart-container'>
                <div className="cart">
                    <h2>Cart Details</h2>
                    {
                        cart.map(cartItem => <Cart data={cartItem} key={cartItem.id} remove={deleteFromCart}></Cart>)
                    }

                    <button className='luckyOne' onClick={chooseLuckyOne}>My Lucky Product</button>
                    <br />
                    {/* <button className='resetCart' onClick={resetCart}>Reset Cart</button> */}

                </div>
            </div>
        </div>
    );
};

export default Shop;
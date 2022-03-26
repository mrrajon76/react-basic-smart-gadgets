import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // product state
    const [products, setProducts] = useState([]);

    // cart state
    const [cart, setCart] = useState([]);

    // load & set products from json file
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // handle add to cart button
    const cartButtonClick = (addProductToCart) => {
        // can add only 4 products
        if (cart.length < 4) {

            // check the product is already in the cart or not
            const sameProduct = cart.find(product => product.id === addProductToCart.id)

            // add the product to the cart only if it is not in the cart
            if (!sameProduct) {
                const newCart = [...cart, addProductToCart];
                setCart(newCart);
            }

            // alert if try to add similar product to the cart
            else {
                alert('Sorry! This product is already in the cart. Try to add a new one.')
            }
        }

        // alert if try to add more than 4 products
        else {
            alert('Sorry! You can only add 4 products to the cart')
        }
    }

    // delete item from cart
    const deleteFromCart = (deleteItem) => {
        const remainingItems = cart.filter(item => item.id !== deleteItem.id);
        setCart(remainingItems);
    }

    // handle choose the lucky product
    const chooseLuckyOne = () => {
        const luckyNumber = cart[Math.floor((Math.random() * 4))];
        const luckyProductName = luckyNumber.name;
        alert('Your Lucky Product is: ' + luckyProductName);
    }

    // handle reset cart
    const resetCart = () => {
        const empty = [];
        setCart(empty);
    }

    return (
        <div className="shop-container">

            {/* show products */}
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} data={product} click={cartButtonClick}></Product>)
                }
            </div>

            {/* cart items */}
            <div className='cart-container'>
                <div className="cart">
                    <h2>Cart Details</h2>
                    {
                        cart.map(cartItem => <Cart data={cartItem} key={cartItem.id} remove={deleteFromCart}></Cart>)
                    }

                    <button className='luckyOne' onClick={chooseLuckyOne}>My Lucky Product</button>
                    <br />
                    <button className='resetCart' onClick={resetCart}>Reset Cart</button>

                </div>
            </div>
        </div>
    );
};

export default Shop;
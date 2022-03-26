import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Product.css';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='product-container'>
            {
                products.map(product => <Shop data={product} key={product.id}></Shop>)
            }

        </div>
    );
};

export default Product;
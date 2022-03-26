import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            {
                products.map(product => <Shop data={product}></Shop>)
            }

        </div>
    );
};

export default Product;
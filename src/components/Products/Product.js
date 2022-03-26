import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);
    return (
        <div>

        </div>
    );
};

export default Product;
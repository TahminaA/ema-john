import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {prouctKey}=useParams();
    const product =fakeData.find(pd => pd.key === prouctKey);
    return (
        <div>
            <h1>Your Product Here.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;
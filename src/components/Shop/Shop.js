import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from  '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Shop = () => {
    const firs10=fakeData.slice(0,10);
    const[products,setProducts]=useState(firs10);
    const[cart,setCart]=useState([]);

    useEffect(() =>{
        const saveCart =getDatabaseCart();
        const productKeys= Object.keys(saveCart);
        const previousCart=productKeys.map(existingKey =>{
            const product= fakeData.find(pd => pd.key === existingKey);
            product.quantity=(saveCart)[existingKey];
            return product;
        })
        setCart(previousCart);
      
    },[])

    const handleAddProduct=(product) =>{
        const toBeAdded=product.key;
        const sameProduct= cart.find(pd => pd.key === toBeAdded);
        let count=1,newCart;
        if(sameProduct){
            const count=sameProduct.quantity+1;
            sameProduct.quantity=count;
            const others=cart.filter(pd => pd.key !== toBeAdded)
            newCart= [...others, sameProduct]
        }
        else{
            product.quantity=1;
            newCart=[...cart ,product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key,count);


    }
        
    

    return (
        <div className="twin-container">
          <div className="product-container">
                   
            {
                products.map(pd =><Product 
                    key={pd.key}
                    showAddToCart={true}
                    handleAddProduct={handleAddProduct}
                    product={pd}
                    ></Product>)
             }
                                         

          </div>
          <div className="cart-container">
              <Cart cart={cart}>
                <Link to="/review">
                <button className="main-button">Review order</button>
                </Link>
              </Cart>
          </div>
            
        </div>
    );
};

export default Shop;
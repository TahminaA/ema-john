import React from 'react';

const ReviewItem = (props) => {
    const{img,name,quantity,key,price}=props.product;

    const  reviewItemStyle={
        borderBottom:"1px solid lightgray",
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:"200px"

    };
    return (
        <div style={reviewItemStyle} className="product">
             <div>
                <img src={img} alt="" srcset="" />

            </div>
            <div>
                <h4 className="product-name">{name}</h4> 
                <p>Quantity: {quantity}</p>
                <p><small>$ {price} </small></p>
                
                <button 
                className="main-button" 
                onClick={ ()=> props.handleRemoveProduct(key)}
                >Remove</button>

            </div>
          
        </div>
    );
};

export default ReviewItem;
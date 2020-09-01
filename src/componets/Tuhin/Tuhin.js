import React from 'react';
import './Tuhin.css'

const Tuhin = (props) => {
    //console.log(props)
    const {img, name, seller, price, stock} = props.products
    return (
        <div className="product">
            
            <div>
                <img src={img}></img>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p>Only {stock} left in stock</p>
                <button 
                    className="button-style"
                    onClick={() => props.handleAddProduct(props.products)} 
                    >add to cart</button>
            </div>
        </div>
    );
};

export default Tuhin;
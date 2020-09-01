import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Tuhin from '../Tuhin/Tuhin';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setproducts] = useState(first10);
    const [cart, setCart] = useState([]);


    const handleAddProduct = (products) =>{
        const newCart = [...cart, products];
        setCart(newCart);
    }
    
    return (
        <div className="Shop-contaner">
            <div className="product-contaner">
                {
                    products.map(pd => <Tuhin
                        handleAddProduct = {handleAddProduct}
                        products= {pd}
                    ></Tuhin>)
                }
            </div>
            <div className="cart-contaner">
                <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );

}
export default Shop;
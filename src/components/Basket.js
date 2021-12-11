import React from 'react';
import basket from "../assets/basket.png"

const Basket = () => {
    return (
        <div className="basketDiv">
            <img id="basket" src={basket} alt="basket"/>
        </div>
    )
}

export default Basket

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const getCartFromStorage = () => {
        const cartString = sessionStorage.getItem('token');
        return JSON.parse(cartString) || [];
    };

    const [currentCart, setCurrentCart] = useState(getCartFromStorage());

    useEffect(() => {
        // Handle changes within the same tab by overriding sessionStorage.setItem
        const originalSetItem = sessionStorage.setItem;

        sessionStorage.setItem = function(key) {  //add function to setitem that says if key is 'token' update state
            originalSetItem.apply(this, arguments);
            if (key === 'token') {
                setCurrentCart(getCartFromStorage());
            }
        };

        return () => {
            sessionStorage.setItem = originalSetItem; // Restore original setItem on unmount
        };
    }, []); // Empty dependency array ensures this effect runs only once

    useEffect(() => {
        console.log(currentCart.length); // Example: Log currentCart length
    }, [currentCart]); // Re-run this effect whenever currentCart changes

    return (
        <>
            <div>
                <div className='bannerBar'></div>
                <div className="banner">
                    <div className="container">
                        <a>
                            <img className='logo' src="https://cdn.pixilart.com/photos/large/a0144d9013f5715.png" alt="Logo"></img>
                        </a>
                        
                    </div>
                    <div style={{ marginLeft: '10rem', marginRight: '10rem' }} className="container">
                        <Link className="navbarLinks" to="/">
                            &nbsp;Home
                        </Link>

                        <Link className="navbarLinks" to="/Shop">
                            &nbsp;Shop
                        </Link>

                        <Link className="cartLink" to="/cart">
                            <h1 className='cartNumber'>{currentCart.length}</h1>
                            <img src='https://img.icons8.com/?size=100&id=85080&format=png&color=FFFFFF' alt="Cart"></img>
                        </Link>
                    </div>
                </div>
                <div className="underbanner"></div>
            </div>
        </>
    );
};

export default Navbar;

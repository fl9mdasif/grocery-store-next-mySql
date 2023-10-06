'use client'
import React, { useEffect, useState } from 'react';

export default function Cart() {
    // Get the cart data from localStorage\

    const [data, setData] = useState([])
    useEffect(() => {
        const cart = localStorage !== 'undefined' ?
            JSON.parse(localStorage.getItem('cart')) || [] :
            alert("error")
            ;
        setData(cart)
    }, [])

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            <ul>
                {data.map((product, index) => (
                    <li key={index}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}


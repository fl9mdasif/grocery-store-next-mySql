'use client'
import React, { useEffect, useState } from 'react';

const GroceryProductSearch = () => {

    const [products, setProduct] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    // 

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        // Filter the products based on the search term
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm)
        );

        // Update the filteredProducts state
        setFilteredProducts(filteredProducts);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for products..."
                className='border py-3 px-4'
                value={searchTerm}
                onChange={handleSearch}
            />

            {/* Ensure that filteredProducts is an array before mapping over it */}


            {
                Array.isArray(filteredProducts) &&
                    filteredProducts.length === 0 ? (
                    <p>No products found matching your search.</p>
                ) :
                    (Array.isArray(filteredProducts) &&
                        filteredProducts.map((product) => (
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                                        src={product.image} />
                                </a>

                                <div className="p-3">
                                    <div className="flex justify-between py-2 ">
                                        <div>
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">{product.name}</h2>
                                            <p className="mt-1">{product.price}</p>
                                            {/* <p className="mt-1">{productId}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )))
            }

        </div>
    );
};

export default GroceryProductSearch;

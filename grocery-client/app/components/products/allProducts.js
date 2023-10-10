// 'use client'
// import { useQuery } from '@tanstack/react-query';

// import { useEffect, useState } from "react";
import GroceryProductSearch from "./SearchProduct"
import SingleProduct from "./singleProduct"
// import Spinner from '../shared/Snipper';

const Products = async () => {

    const res = await fetch('http://localhost:5000/products')
    const products = await res.json()

    // const { isLoading, error, data: products } = useQuery(['pdData'], () =>
    //     fetch('http://localhost:5000/products').then(res =>
    //         res.json())
    // )
    // if (isLoading) return <Spinner />
    // if (error) return 'An error has occurred: ' + error.message
    // console.log(products);

    return (
        <div className="container  px-5 py-24 mx-auto">

            <GroceryProductSearch />
            <div className="flex justify-center items-center flex-wrap m-4">

                {
                    products.map((items, index) =>

                        <SingleProduct
                            items={items}
                            id={items.id}

                            key={index} />

                    )
                }
            </div>
        </div>
    )
}
export default Products
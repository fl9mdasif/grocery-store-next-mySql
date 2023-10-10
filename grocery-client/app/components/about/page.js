"use client"
import React, { useEffect, useState } from 'react'
import { UserAuth } from '@/app/context/AuthContext';
import Products from '../products/allProducts';
import Spinner from '../shared/Snipper';

export default function Card() {


    const { user, googleSignIn } = UserAuth();
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const checkAuthentication = async () => {
    //         await new Promise((resolve) => setTimeout(resolve, 50));
    //         setLoading(false);
    //     };
    //     checkAuthentication();
    // }, [user]);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };
    return (

        <div>
            {


                !user ? (
                    <div className='flex items-center justify-center '>

                        <p
                            onClick={handleSignIn}
                            className="p-2 hover:bg-gray-200 cursor-pointer">
                            Login for see our products
                        </p>
                    </div>

                ) : (
                    <div className="">
                        <Products />

                    </div>
                )}
        </div>


    )
}

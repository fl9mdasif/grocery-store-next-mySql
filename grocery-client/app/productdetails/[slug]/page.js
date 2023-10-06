'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { useParams } from 'next/navigation'
export default function ProductInfo() {

    // const router = useRouter()
    const params = useParams()
    console.log("route", params)
    // const { productId } = router.query;

    // const res = await fetch('http://localhost:5000/products')
    // let data = await res.json()

    return (
        <div>page{params.slug}
        </div>
    )
}

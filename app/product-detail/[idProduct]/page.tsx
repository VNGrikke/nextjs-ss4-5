"use client"
import React from 'react'
interface IdProduct{
    idProduct: string
}
interface Prop{
    params: IdProduct
}

export default function ProductDetail(props: Prop) {
    const {params} = props; 

    return (
        <div>id product: {params.idProduct}</div>
    )
}


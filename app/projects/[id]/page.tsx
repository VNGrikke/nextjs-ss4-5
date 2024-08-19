"use client"
import React from 'react'
interface IdTask {
    id: string;
}
interface Prop {
    params: IdTask;

}
export default function page(props: Prop) {
    const { params } = props;
    console.log(params);
    
    return (
        <div>
            user id : {params.id}
        </div>
    )
}

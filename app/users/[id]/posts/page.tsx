"use client"
import React from 'react'
interface IdUser {
    id: string;
}
interface Prop {
    params: IdUser;

}
export default function page(props: Prop) {
    const { params } = props;
    console.log(params);
    
    return (
        <div>
            danh sach bai viet cua user id : {params.id}
        </div>
    )
}

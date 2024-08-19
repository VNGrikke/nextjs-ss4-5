"use client"
import React from 'react'
interface NameCompany {
    nameCompany: string;
}
interface Prop {
    params: NameCompany;
}

export default function Company(props: Prop) {
    const {params} = props;
  return (
    <div>company name: <b>{params.nameCompany}</b></div>
  )
}

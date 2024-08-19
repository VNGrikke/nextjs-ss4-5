"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Home() {
    const pathName = usePathname()
    
  return (
    <div className='flex gap-3'>
        <Link className= {pathName == "/home" ? "active":""} href={"/home"}>home</Link>
        <Link className= {pathName == "/new" ? "active":""} href={"/new"}>news</Link>
        <Link className= {pathName == "/contact" ? "active":""} href={"/contact"}>contact</Link>
        <Link className= {pathName == "/login" ? "active":""} href={"/login"}>login</Link>
    </div>
  )
}

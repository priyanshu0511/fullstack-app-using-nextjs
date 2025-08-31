import Link from 'next/link'
import React from 'react'

const links=[
    {
        id:1,
        title:"home",
        url:"/"
    },{
        id:2,
        title:"portfolio",
        url:"/portfolio"
    },{
        id:3,
        title:"blog",
        url:"/blog"
    },{
        id:4,
        title:"about",
        url:"/about"
    },{
        id:5,
        title:"contact",
        url:"/contact"
    },{
        id:6,
        title:"dashboard",
        url:"/dashboard"
    },
]

const Navbar = () => {
  return (
    <div className='h-24 flex justify-between items-center'>
        <Link href="/" className='font-semibold text-xl'>lamamia</Link>
        <div className='flex gap-6 items-center'>
            {links.map(link=>(
                <Link key={link.id} href={link.url}>{link.title.charAt(0).toUpperCase() + link.title.slice(1)}</Link>
            ))}
            <button className='p-1.5 bg-green-300 text-white cursor-pointer rounded-sm'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar
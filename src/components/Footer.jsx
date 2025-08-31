import Image from 'next/image'
import React from 'react'

const images=[{
  id:1,
  src:"/1.png",
  alt:"FacebookImg"
},{
  id:2,
  src:"/2.png",
  alt:"InstaImg"
},{
  id:3,
  src:"/3.png",
  alt:"TwitterImg"
},{
  id:4,
  src:"/4.png",
  alt:"YoutubeImg"
},]

const Footer = () => {
  return (
    <div className='h-12 flex justify-between items-center px-5'>
        <div>©2025 Priyanshu Singh. All rights reserved.</div>
        <div className='flex gap-4'>
          {images.map((image)=>(
            <Image key={image.id} src={image.src} alt={image.alt} width={15} height={15} />
          ))}
        </div>
    </div>
  )
}

export default Footer
import Image from 'next/image'
import React from 'react'

const BlogPost = () => {
  return (
     <div className="px-20">
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">Title</h1>
          <p className="text-xl font-light">
            Description
          </p>
          <div className="flex items-center gap-2.5">
            <Image
              src="/hero.png"
              alt=""
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
            <span className="">Username</span>
          </div>
        </div>
        <div className="flex-1 h-76 relative">
          <Image
            src="/apps.jpg"
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-12 text-xl font-light text-gray-300 text-center">
        <p className="">
         Content
        </p>
      </div>
    </div>
  )
}

export default BlogPost
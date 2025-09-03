import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className="px-20">
        <Link href={`/blog/1`} className="flex items-center gap-12 mb-12 mt-12">
          <div className="">
            <Image
              src="/websites.jpg"
              alt=""
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div className="">
            <h1 className="mb-2.5">Title</h1>
            <p className="text-xl text-gray-400">Description</p>
          </div>
        </Link>
        <Link href={`/blog/2`} className="flex items-center gap-12 mb-12">
          <div className="">
            <Image
              src="/apps.jpg"
              alt=""
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div className="">
            <h1 className="mb-2.5">Title</h1>
            <p className="text-xl text-gray-400">Description</p>
          </div>
        </Link>
        
    </div>
  )
}

export default Blog
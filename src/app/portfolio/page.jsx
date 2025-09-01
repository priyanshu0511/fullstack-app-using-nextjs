import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Portfolio = () => {
  return (
    <div className="px-20">
      <h1 className="text-4xl mx-5 mb-10 font-bold">Choose a gallery</h1>
      <div className="flex gap-12">
        <Link href="/portfolio/illustrations" className="border-4 border-gray-300 hover:text-green-300 rounded-md w-76 h-96 relative">
        <Image src="/illustration.png" fill={true} alt='' />
          <span className="absolute right-2.5 bottom-2.5 text-2xl font-bold">Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className="border-4 border-gray-300 hover:text-green-300 rounded-md w-76 h-96 relative">
        <Image src="/websites.jpg" fill={true} alt='' />
          <span className="absolute right-2.5 bottom-2.5 text-2xl font-bold">Websites</span>
        </Link>
        <Link href="/portfolio/application" className="border-4 border-gray-300 hover:text-green-300 rounded-md w-76 h-96 relative">
        <Image src="/apps.jpg" fill={true} alt='' />
          <span className="absolute right-2.5 bottom-2.5 text-2xl font-bold">Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
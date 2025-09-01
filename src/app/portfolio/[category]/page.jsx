import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


const Category = ({ params }) => {
  
  return (
    <div className="">
      <h1 className="">{params.category}</h1>

        <div className="">
          <div className="">
            <h1 className="">item.title</h1>
            <p className="">item.desc</p>
            <Link href="#">
            <Button text="See More"/>
            </Link>
          </div>
          <div className="">
            <Image
              className=""
              fill={true}
              src=""
              alt=""
            />
          </div>
        </div>
      
    </div>
  );
};

export default Category;
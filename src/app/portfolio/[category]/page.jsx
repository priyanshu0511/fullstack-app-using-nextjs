import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { items } from './data';
import { notFound } from 'next/navigation';

const getData=(cat)=>{
  const data=items[cat];
  if(data){
    return data;
  }
  return notFound();
}


const Category = async({ params }) => {

  const {category}=await params;
  const data= getData(category);
  
  return (
    <div className="px-20">
      <h1 className="text-3xl">{category}</h1>
      {data.map((item)=>(
        <div className="flex gap-12 mt-12 mb-24" key={item.id}>
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1 className="text-5xl">{item.title}</h1>
            <p className="text-xl">{item.desc}</p>
            <Link href="#">
            <Button text="See More"/>
            </Link>
          </div>
          <div className="flex-1 h-96 relative">
            <Image
              className="object-cover"
              fill={true}
              src={item.image}
              alt=""
              />
          </div>
        </div>
      
            ))}
    </div>
  );
};

export default Category;
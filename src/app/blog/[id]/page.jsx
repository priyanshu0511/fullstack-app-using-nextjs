import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
};

const BlogPost = async ({ params }) => {

  const {id}=await params;

  const data = await getData(id);

  return (
    <div className="px-20">
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between">
          <h1 className="text-4xl">{data.title}</h1>
          <p className="text-xl font-light">{data.body}</p>
          <div className="flex items-center gap-2.5">
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className="object-cover rounded-full"
            />
            <span className="">Username</span>
          </div>
        </div>
        <div className="flex-1 h-76 relative">
          <Image src={data.img} alt="" fill={true} className="object-cover" />
        </div>
      </div>
      <div className="mt-12 text-xl font-light text-gray-300 text-center">
        <p className="">{data.body}</p>
      </div>
    </div>
  );
};

export default BlogPost;

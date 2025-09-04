import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Blog = async () => {
  const data = await getData();

  return (
    <div className="px-20">
      {data.map((item) => (
        <Link
          key={item._id}
          href={`/blog/${item._id}`}
          className="flex items-center gap-12 mb-12 mt-12"
        >
          <div className="">
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className="object-cover"
            />
          </div>
          <div className="">
            <h1 className="mb-2.5">{item.title}</h1>
            <p className="text-xl text-gray-400">{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

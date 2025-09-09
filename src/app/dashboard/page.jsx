"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr]=useState(false);
  // const [isLoading,setIsLoading]=useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setErr(true);
  //     }
  //     setData(res.json());
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);

  const session = useSession();

  const router = useRouter();

  console.log(session);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );
  console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete=async(id)=>{
    try {
      await fetch(`api/posts/${id}`,{
        method:"DELETE"
      })
      mutate();
    } catch (error) {
      console.log(error);
    }
  }

  if (session.status === "authenticated") {
    return (
      <div className=" flex gap-24 w-full px-20">
        <div className="flex-1">
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className="flex items-center justify-between my-12" key={post._id}>
                  <div className="w-48 h-24 relative">
                    <Image src={post.img} alt="" width={200} height={100} className="object-cover" />
                  </div>
                  <h2 className="">{post.title}</h2>
                  <span className="cursor-pointer text-red-600" onClick={()=>handleDelete(post._id)}>
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className="flex-1 flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className="p-2.5 bg-transparent border-2 border-gray-300  text-gray-300 text-xl font-bold"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Desc"
            className="p-2.5 bg-transparent border-2 border-gray-300  text-gray-300 text-xl font-bold"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image"
            className="p-2.5 bg-transparent border-2 border-gray-300  text-gray-300 text-xl font-bold"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2.5 bg-transparent border-2 border-gray-300 text-gray-300 text-xl font-bold h-36"
          ></textarea>
          <button className="p-5 cursor-pointer bg-green-500 border-0 rounded-md text-gray-200 font-bold">Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;

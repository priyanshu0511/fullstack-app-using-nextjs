"use client";
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

  const fetcher=(...args)=>fetch(...args).then(res=>res.json())

  const {data,error,isLoading}=useSWR("https://jsonplaceholder.typicode.com/posts",fetcher);

  console.log(data);

  return <div>Dashboard</div>;
};

export default Dashboard;

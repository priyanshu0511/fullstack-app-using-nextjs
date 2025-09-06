"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {

  const session=useSession();
  const router=useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn("credentials", { email, password });
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5 px-20 w-full">
      <form className="w-76 flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-5 bg-transparent border-2 border-gray-300 rounded-md text-xl font-bold"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-5 bg-transparent border-2 border-gray-300 rounded-md text-xl font-bold"
        />
        <button className="w-76 p-5 cursor-pointer bg-green-400 border-0 rounded-md text-gray-200 font-bold">
          Register
        </button>
      </form>
      <button onClick={()=>signIn("google")}>Login with Google</button>
      <Link href="/dashboard/register">Sign up with a new account</Link>
    </div>
  );
};

export default Login;

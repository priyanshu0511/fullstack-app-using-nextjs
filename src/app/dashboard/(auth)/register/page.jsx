"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created.");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-5 px-20 w-full">
      <form className="w-76 flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-5 bg-transparent border-2 border-gray-300 rounded-md text-xl font-bold"
        />
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
      {err && "Something went wrong"}
      <Link href="/dashboard/login">Login with existing account</Link>
    </div>
  );
};

export default Register;

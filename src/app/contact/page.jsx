import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="px-20 flex flex-col w-full">
      <h1 className="flex justify-center text-3xl mb-16">Let's Keep in Touch</h1>
      <div className="flex">
        <div className="w-1/2 h-[50vh] flex justify-center items-center">
          <Image
            src="/contact.png"
            alt=""
            width={300}
            height={300}
            className=""
          />
        </div>
        <form className="w-1/2 flex flex-col gap-10">
          <input type="text" placeholder="Name" className="p-5 bg-transparent outline-0 text-gray-300 border-2 border-gray-300 text-xl font-bold w-full" />
          <input type="text" placeholder="Email" className="p-5 bg-transparent outline-0 text-gray-300 border-2 border-gray-300 text-xl font-bold w-full" />
          <textarea
            className="p-5 bg-transparent outline-0 text-gray-300 border-2 border-gray-300 text-xl font-bold w-full h-20"
            placeholder="Message"
            cols="30"
            rows="10"
          ></textarea>
          <Link href="#">
            <Button text="Send" />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Contact;

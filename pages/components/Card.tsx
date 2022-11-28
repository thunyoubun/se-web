import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export default function Card(props: any) {
  return (
    <div className="flex justify-center align-middle w-full  ">
      <div className=" flex flex-col justify-center bg-white/75  w-64 p-4 rounded-lg backdrop-blur-md">
        <div className=" border-4 rounded-full ring-4 ring-blue-600">
          <img className=" object-contain rounded-full w-64" src={props.src} />
        </div>
        <div className="flex flex-col justify-center text-center my-4">
          <h1 className=" text-xl font-semibold">{props.fname}</h1>
          <h1 className=" font-semibold text-violet-600">{props.job}</h1>
        </div>
        <hr></hr>
        <div className="flex justify-center gap-3 mt-4">
          <a href="https://github.com/thunyoubun">
            <AiFillGithub className=" hover:scale-110" size={32} />
          </a>
          <a href="https://www.facebook.com/switch.2412">
            <FaFacebook size={32} className=" hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
export declare type props = {
  fname: string;
  job: string;
  src: string;
  github: string;
  facebook: string;
};
export default function Card({ fname, job, src, github, facebook }: props) {
  return (
    <div className="flex justify-center align-middle w-full  ">
      <div className=" flex flex-col justify-center bg-white  w-64 p-4 rounded-lg backdrop-blur-md">
        <div className=" border-4 rounded-full ring-4 ring-blue-600">
          <Image width={500} height={500} className=" object-contain rounded-full w-64" src={src} alt=""></Image>
          {/* <img className=" object-contain rounded-full w-64" src={src} /> */}
        </div>
        <div className="flex flex-col justify-center text-center my-4">
          <h1 className=" text-xl font-semibold">{fname}</h1>
          <h1 className=" font-semibold text-violet-600">{job}</h1>
        </div>
        <hr></hr>
        <div className="flex justify-center gap-3 mt-4">
          <a href={github}>
            <AiFillGithub className=" hover:scale-110" size={32} />
          </a>
          <a href={facebook}>
            <FaFacebook size={32} className=" hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
}

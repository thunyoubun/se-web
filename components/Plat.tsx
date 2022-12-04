import React from "react";
import Image from "next/image";

export declare type props = {
  fname: string;
  src: string;
};

export default function Plat({ fname, src }: props) {
  return (
    <div className="flex justify-center hover:scale-110 duration-300 backdrop-blur-sm hover:backdrop-blur-lg bg-white/30 transition-transformw-full shadow-xl shadow-violet-600 hover:bg-violet-700 rounded-md p-5">
      <div className=" flex flex-col justify-center relative">
        <div className="relative w-36 h-32 ">
          <Image layout="fill" objectFit="contain" src={src} alt=""></Image>
        </div>
        <div className="flex flex-col justify-center text-center my-4">
          <h1 className=" text-xl font-semibold">{fname}</h1>
        </div>
      </div>
    </div>
  );
}

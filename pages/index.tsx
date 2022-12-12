import code from "./assets/background/gg.jpg";
import overview from "./assets/background/R12020-Messaging-Graphic.png";
import Image from "next/image";
import Plat from "../components/Plat";
import Link from "next/link";

import { plats } from "../components/data";

export default function Home() {
  return (
    <div className=" w-full">
      <div className="  bg-gradient-to-r from-sky-500 to-indigo-500 ">
        <Image className="  h-screen" src={code} alt="d" />
        <div>
          <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center backdrop-blur-md sm:bg-black/75 bg-transparent  xl:w-1/3 sm:w-1/2 z-0">
            <div className="text-white text-center space-y-5">
              <h2 className="text-3xl font-bold">Deviloper</h2>

              <p className="mx-10 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                quam consequatur, necessitatibus dolorem, provident voluptas
                esse recusandae impedit distinctio laboriosam modi a nulla
                ratione quaerat?
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/work">
                <button className="text-white rounded-md hover:bg-white hover:text-black  border py-2 px-5">
                  View Documents
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className="flex flex-col text-center justify-center w-4/5 m-auto py-10">
          <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
            <h3 className=" text-4xl font-bold text-white">
              Software Overview
            </h3>
            <p className=" text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              ullam eius laborum consequatur a libero facere iste quos nemo
              rerum.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <Image src={overview} alt="f" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-violet-500 to-sky-500">
        <div className="flex flex-col text-center justify-center w-4/5 m-auto py-10">
          <div className="w-full xl:w-1/2 m-auto text-center my-10 space-y-5">
            <h3 className=" text-4xl font-bold text-white">Platform</h3>
            <p className=" text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              ullam eius laborum consequatur a libero facere iste quos nemo
              rerum.
            </p>
          </div>
          <div>
            <div className="flex justify-center">
              <div className=" mt-5 grid grid-cols-2 sm:grid-cols-3 text-center gap-8 p-4 ">
                {plats.map((x) => (
                  <Plat fname={x.name} src={x.src} key={plats.indexOf(x)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

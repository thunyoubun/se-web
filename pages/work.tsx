import React from "react";
import Work from "../components/Work";

import { docs } from "../components/data";
import Footer from "../components/Footer";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export default function work() {
  return (
    <div className=" w-full m-auto relative  ">
      <div className="    flex bg-gradient-to-r  from-sky-500 to-indigo-500  ">
        <div className=" relative pt-20  m-auto h-max w-4/5 ">
          <div className="flex justify-center m-10">
            <h3 className=" text-4xl text-white font-bold ">Works</h3>
          </div>
          <div className="h-100 my-2 ">
            <div
              className="flex flex-col gap-2 h-fit object-contain  my-10  "
              id=""
            >
              {docs.map((x) => (
                <Work
                  id={x.id}
                  num={x.num}
                  name={x.name}
                  src={x.src}
                  key={docs.indexOf(x)}
                />
              ))}

              <div className=" bg-white rounded-md p-4">
                <h1 className=" text-lg font-bold my-4">Source Code</h1>
                <div>
                  <ul className="flex flex-col gap-2">
                    <li className=" ">
                      <Link
                        href={"https://github.com/thunyoubun/se-quizz"}
                        target="_blank"
                        className="flex flex-row gap-3"
                      >
                        <AiFillGithub size={30} />
                        <h1 className=" text-blue-700 hover:text-blue-400 hover:underline">
                          https://github.com/thunyoubun/se-quizz
                        </h1>
                      </Link>
                    </li>
                    <li className=" ">
                      <Link
                        href={"https://github.com/lalinnx/sebackend"}
                        target="_blank"
                        className="flex flex-row gap-3"
                      >
                        <AiFillGithub size={30} />
                        <h1 className=" text-blue-700 hover:text-blue-400 hover:underline">
                          https://github.com/lalinnx/sebackend
                        </h1>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Work from "../components/Work";

import { docs } from "../components/data";
import Footer from "../components/Footer";

export default function work() {
  return (
    <div className=" w-full m-auto relative  ">
      <div className=" container  mx-auto flex bg-gradient-to-r  from-sky-500 to-indigo-500  ">
        <div className=" relative pt-20  m-auto h-max w-4/5 ">
          <div className="flex justify-center m-10">
            <h3 className=" text-4xl text-white font-bold ">Works</h3>
          </div>
          <div className="h-100 my-2 ">
            <div
              className="flex flex-col gap-2 h-fit object-contain  mb-96  "
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

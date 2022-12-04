import React from "react";
import Work from "../components/Work";

import { docs } from "../components/data";

export default function work() {
  return (
    <div className=" w-full ">
      <div className="flex bg-gradient-to-r from-sky-500 to-indigo-500 ">
        <div className=" pt-20 w-full   ">
          <div className="flex justify-center m-10">
            <h3 className=" text-4xl text-white font-bold ">Works</h3>
          </div>

          <div className="m-auto p-auto h-screen  w-4/5">
            <div className="flex flex-col    gap-2">
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

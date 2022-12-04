import { useEffect } from "react";
import React from "react";
import { AiOutlineFileDone } from "react-icons/ai";

export declare type props = {
  name: string;
  id: string;
  src: string;
  num: string;
};

export default function Work({ name, id, src, num }: props) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <div className="accordion w-full" id="accordionExample">
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0" id="headingOne">
          <button
            className="
          accordion-button
          relative
          flex
          items-center
          w-full
          py-4
          px-5
          text-base text-gray-800 text-left
          border-0
          rounded-none
          transition
          focus:outline-none
        "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${num}`}
            aria-expanded="true"
            aria-controls={`collapse${num}`}
          >
            <div className=" flex gap-3">
              <AiOutlineFileDone size={24} />
              <h4 className=" font-bold">
                Assignment #A{id} - {name}
              </h4>
            </div>
          </button>
        </h2>
        <div
          id={`collapse${num}`}
          className="accordion-collapse collapse "
          aria-labelledby={`heading${num}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body  py-4 px-5">
            <strong>{name} - </strong> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quaerat praesentium harum odio repellendus aliquam
            velit quo, beatae illum accusamus quos corrupti minus alias sapiente
            porro! Qui vero autem porro suscipit.
            <embed
              src="/assets/file/Se-Group.pdf"
              width="100%"
              height={500}
              type="application/pdf"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

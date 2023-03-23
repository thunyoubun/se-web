import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineFileDone } from "react-icons/ai";

export declare type props = {
  name: string;
  id: string;
  src: string;
  num: string;
};

export default function Work({ name, id, src, num }: props) {
  const [onClicked, setOnclicked] = useState(false);
  const [textColor, setTextColor] = useState("text-gray-800");
  const [collap, setCollap] = useState("collapsed");

  const handleClick = () => {
    setOnclicked(!onClicked);
  };

  const changeColor = () => {
    setOnclicked(!onClicked);
    if (!onClicked) {
      setTextColor("text-blue-600");
      setCollap("");
    } else {
      setTextColor("text-gray-800");
      setCollap("collapsed");
    }
  };
  useEffect(() => {
    changeColor;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="accordion w-full " id="accordionExample">
      <div className="accordion-item bg-white border border-gray-200">
        <h2 className="accordion-header mb-0  " id="headingOne">
          <button
            onClick={changeColor}
            className={`
          accordion-button
          relative
          flex
          ${collap}
          items-center
          w-full
          py-4
          px-5
          text-base ${textColor} text-left
          border-0
          rounded-none
          transition
           delay-1s
           ease-out
          focus:outline-none
            `}
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
        {!onClicked ? (
          <div></div>
        ) : (
          <div
            id={`collapse${num}`}
            className="accordion-collapse  "
            aria-labelledby={`heading${num}`}
            data-bs-parent="#accordionExample"
          >
            <hr></hr>
            <div className="accordion-body  py-4 px-5">
              <strong>
                {name}
                {/* - */}
              </strong>
              {/*  Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Quaerat praesentium harum odio repellendus
              aliquam velit quo, beatae illum accusamus quos corrupti minus
              alias sapiente porro! Qui vero autem porro suscipit. */}

              {src.includes(".pdf") ? (
                <iframe src={src} width="100%" height={500}></iframe>
              ) : (
                <a
                  href={src}
                  target="_blank"
                  className="ml-4 underline hover:text-blue-500"
                >
                  LINK VIDEO
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

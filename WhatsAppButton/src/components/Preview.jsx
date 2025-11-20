
import React from "react";

const Preview = ({ data, link }) => {

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg"
};

const shapeClasses = {
  rounded: "rounded-xl",
  pill: "rounded-full",
  square: "rounded-none"
};

const positionClasses = {
  inline: "relative",
  floating: "fixed bottom-6 right-6"
};

  return (
    <div className=" flex flex-col  justify-center  p-4">
        <h2 className="text-xl font-bold  text-center pb-5 ">
          Live Preview
        </h2>


        <div className="flex justify-center">
          <a
            href={link}
            target={data.newTab ? "_blank" : "_self"}
              className={`${sizeClasses[data.size]} ${shapeClasses[data.shape]} bg-[${data.color}] text-white ${positionClasses[data.position]} inline-block`}

            style={{ background: data.color || "#6366F1" }}
          >
            {data.label || "Chat With Us"}
          </a>
        </div>
      </div>
  );
};

export default Preview;


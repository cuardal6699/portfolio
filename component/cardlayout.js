import React from "react";
import { services } from "../component/card";

function Card({ services }) {
  return (
    <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-4 ">
      {services.map((item) => (
        <div className=" px-7 pt-24 pb-12 h-fit rounded-md ">
          <div className="bg-white sm:h-80 lg:h-96 lg:w-96  w-auto text-center items-center rounded-xl md:w-60 md:h-64 ">
            <div className="lg:pt-24 md:pt-8"></div>
            <div className="bg-[#F5F3FE] lg:rounded-2xl mx-auto lg:w-16 lg:h-16 md:w-12 md:h-12 md:rounded-xl">
              <div className="text-[#7E74F1] lg:w-10 mx-auto lg:pt-3 md:w-8 md:pt-2 h-full">
                {item.icon}
              </div>
            </div>
            <div className="mt-3">
              <h1 className="font-bold text-lg text-black mb-1 w-32 mx-auto ">
                {item.title}
              </h1>
              <p className="font-medium mt-4 lg:text-sm md:text-xs text-black lg:w-56 mx-auto md:w-48">
                {item.detail}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

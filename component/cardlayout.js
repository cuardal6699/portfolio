import React from "react";
import { services } from "../component/card";

function Card({ services }) {
  return (
    <div className="container mx-auto grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-1 gap-4">
      {services.map((item) => (
        <div className=" px-7 pt-24 pb-12 h-fit rounded-md">
          <div className="bg-white sm:h-80 lg:h-96 md:h-96 w-auto text-center items-center rounded-xl ">
            <div className="pt-24"></div>
            <div className="bg-[#F5F3FE] rounded-2xl mx-auto w-16 h-16">
              <div className="text-[#7E74F1] w-10 mx-auto pt-3 h-full">
                {item.icon}
              </div>
            </div>
            <div className="mt-3">
              <h1 className="font-bold text-lg text-black mb-1 w-32 mx-auto">
                {item.title}
              </h1>
              <p className="font-medium mt-4 text-sm text-black w-56 mx-auto">
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

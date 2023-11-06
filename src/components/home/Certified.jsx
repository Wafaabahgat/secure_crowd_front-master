import React from "react";
import Title from "../UI/Title";
import Image from "next/image";
import certified from "@/assets/certified.png";

const Certified = () => {
  return (
    <div className="w-full py-5">
      <div className="lg:mx-[7%] mx-[4%] flex items-center justify-center flex-col">
        <Title ttl="Certified Professionals" />
        <div className="flex mt-10">
          <div>
            <p className="text-lg line-clamp-2">
              Our highly skilled and experienced team comprises of individuals
              who possess globally recognized certifications.
            </p>
            <button className="text-white hover:opacity-80 active:scale-90 mt-20 sm:whitespace-nowrap py-2 px-6 bg-gradient-to-b from-[#325FE3] to-[#367FD3] rounded-md w-fit">
              View more...
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Image src={certified} alt="" />
            <Image src={certified} alt="" />
            <Image src={certified} alt="" />
            <Image src={certified} alt="" />
            <Image src={certified} alt="" />
            <Image src={certified} alt="" />
            <Image src={certified} alt="" />
            <Image src={certified} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certified;

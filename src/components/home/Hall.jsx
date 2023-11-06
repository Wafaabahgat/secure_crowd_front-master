import Image from "next/image";
import React from "react";
import Title from "../UI/Title";
import paypal from "@/assets/Paypal.png";

const Hall = () => {
  return (
    <div className="w-full py-5">
      <div className="lg:mx-[7%] mx-[4%]">
        <div className="bg-secondaryBlack z-[-1] rounded-lg p-4">
          <div className="text-center relative z-0 rounded-md overflow-hidden p-5 hall">
            <Title ttl="Hall Of Fames" />
            <p className="mb-20 sm:px-20">
              Our team members have been rewarded and ackowledge by the
              following companies after reporting security vulnerabilities in
              their products.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 w-full">
              <Image
                priority
                className="max-w-full w-[222px] object-contain"
                src={paypal}
                alt=""
              />
              <Image
                priority
                className="max-w-full w-[222px] object-contain"
                src={paypal}
                alt=""
              />
              <Image
                priority
                className="max-w-full w-[222px] object-contain"
                src={paypal}
                alt=""
              />
              <Image
                priority
                className="max-w-full w-[222px] object-contain"
                src={paypal}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hall;

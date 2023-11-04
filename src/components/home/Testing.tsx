import { FC } from "react";
import Image from "next/image";
import testing from "../../assets/testing.png";
import TestingForm from "../../Form/TestingForm";
import Title from "../UI/Title";

const Testing = () => {
  return (
    <div className="mt-32 lg:w-[1200px] h-[1067px]">
      <div className="flex flex-col justify-center items-center">
        <Title ttl="Penerration Testing Overview" />
        <h5 className="text-xl text-text py-2">
          "Creation is your job, and security is ours."
        </h5>
        <div className="mt-10 flex mx-auto">
          <Image
            src={testing}
            alt=""
            width={750}
            height={446.76}
            className="mr-20 lg:w-[950px] md:w-[500px] w-[450px]"
          />
        </div>
        <TestingForm />
      </div>
    </div>
  );
};

export default Testing;

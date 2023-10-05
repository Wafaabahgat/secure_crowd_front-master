import { FC } from "react";
import Image from "next/image";
import testingI from "@/assets/testingI.png";
import testing1 from "@/assets/testing1.png";
import testing2 from "@/assets/testing2.png";
import testing3 from "@/assets/testing3.png";
import Line from "@/assets/Line.png";
import Frame from "@/assets/Frame.png";

interface TestingProps {}

const Testing: FC<TestingProps> = () => {
  return (
    <div className="mt-32 w-[1200px] h-[1067px] bg-gray-800 ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl py-3">
          Penerration Testing Overview
        </h2>
        <h5 className="text-xl text-text">
          "Creation is your job, and security is ours."
        </h5>
        <div className="mt-16 flex flex-col items-center justify-center">
          <Image
            src={testingI}
            alt=""
            width={650}
            height={446.76}
            className="mr-20"
          />
          <Image src={Frame} alt="" className="mt-[-250px]" />
        </div>
      </div>
      <div className="grid ml-6 ">
        <div className="flex">
        <Image src={testing1} alt="" width={352} />
        <Image src={Line} alt="" className="h-[1px] mt-16 w-[40px]" />
        <Image src={testing2} alt="" width={352} />
        <Image src={Line} alt="" className="h-[1px] mt-16 w-[40px]" />
        <Image src={testing3} alt="" width={352} />
        </div>
        <div className="flex">
        <Image src={testing1} alt="" width={352} />
        <Image src={Line} alt="" className="h-[1px] mt-16 w-[40px]" />
        <Image src={testing2} alt="" width={352} />
        <Image src={Line} alt="" className="h-[1px] mt-16 w-[40px]" />
        <Image src={testing3} alt="" width={352} />
        </div>
      </div>
    </div>
  );
};

export default Testing;
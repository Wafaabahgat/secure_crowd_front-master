import { FC } from "react";
import Image from "next/image";
import testingI from "@/assets/testingI.png";
import testing1 from "@/assets/testingI.png";
import testing2 from "@/assets/testingI.png";
import testingI from "@/assets/testingI.png";
import Frame from "@/assets/Frame.png";

interface TestingProps {}

const Testing: FC<TestingProps> = () => {
  return (
    <div className="mt-32 w-[1212px] h-[1067px] bg-gray-800 ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl py-3">
          Penerration Testing Overview
        </h2>
        <h5 className="text-xl text-text">
          "Creation is your job, and security is ours."
        </h5>
        <div className="mt-16 flex flex-col items-center justify-center">
          <Image src={testingI} alt="" width={650} height={446.76} className="mr-20"/>
          <Image src={Frame} alt=""  className="mt-[-250px]"/>
        </div>
      </div>
      <div>
      <Image src={testingI} alt="" width={650} height={446.76} className="mr-20"/>

      </div>
    </div>
  );
};

export default Testing;
// width: 650px
// height: 446.76px
// top: 171px
// left: 240px
// border: 1px

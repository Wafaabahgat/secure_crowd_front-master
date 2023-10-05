import { FC } from "react";
import Image from "next/image";
import testing1 from "@/assets/testing1.png";

interface TestingProps {}

const Testing: FC<TestingProps> = () => {
  return (
    <div className="mt-32 w-[1212px] h-[1067px] bg-gray-500">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl py-3">
          Penerration Testing Overview
        </h2>
        <h5 className="text-xl text-text">
          "Creation is your job, and security is ours."
        </h5>
        <div className="w-[650px] h-[446.76px] mt-16 bg-gray-950">          <Image src={client} alt="" />
</div>
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

import { FC } from "react";
import Image from "next/image";
import client from "@/assets/client.png";

interface TestingProps {}

const Testing: FC<TestingProps> = () => {
  return (
    <div className="mt-32 w-[1212px] h-[1067px] bg-gray-500">
      <div className="flex flex-col">
        <h2 className="font-semibold text-3xl py-3">
          Penerration Testing Overview
        </h2>
        <h5 className="text-xl text-text">"Creation is your job, and security is ours."</h5>
        <div className="w-[650px] h-[446.76px] bg- bg-g"></div>
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

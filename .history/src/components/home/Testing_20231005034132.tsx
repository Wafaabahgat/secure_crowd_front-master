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
        <h4 className=" text-">"Creation is your job, and security is ours."</h4>
      </div>
    </div>
  );
};

export default Testing;
// width: 1212px
// height: 1067px
// top: 1381px
// left: 114px

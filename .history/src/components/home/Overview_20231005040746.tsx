import { FC } from "react";
import Image from "next/image";

interface OverviewProps {}

// const data = [{ ttl: "home", link: "/" }];

const Overview: FC<OverviewProps> = () => {
  return (
    <div className="mt-32 w-[1200px] h-[341px] bg-gray-700">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl py-3">
          Penerration Testing Overview
        </h2>
        <div className="w-[1222px] h-[359px]">
          <div>
            <p className="uppercase">test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

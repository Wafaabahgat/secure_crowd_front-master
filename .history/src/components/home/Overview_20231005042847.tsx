import { FC } from "react";
import Image from "next/image";
import overviewI from "@/assets/overviewI.png";
import overview1 from "@/assets/overview1.png";
import overview2 from "@/assets/overview2.png";
import overview3 from "@/assets/overview3.png";
import overview4 from "@/assets/overview4.png";

interface OverviewProps {}

const Overview: FC<OverviewProps> = () => {
  return (
    <div className="mt-32 w-[1200px] h-[341px] bg-gray-400">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl py-3">
          Penerration Testing Overview
        </h2>

        <div className="w-[1200px] h-[359px]">
          <div className="w-[385px] h-[122px]">
            <h6 className="uppercase">test</h6>
            <Image src={overview1} alt=""/>
          </div>
          <Image src={overviewI} width={352} height={3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Overview;

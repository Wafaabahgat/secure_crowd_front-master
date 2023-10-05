import { FC } from "react";
import Image from "next/image";
import overviewI from "@/assets/overviewI.png";
import overview1 from "@/assets/overview1.jpg";
import overview2 from "@/assets/overview2.jpg";
import overview3 from "@/assets/overview3.jpg";
import overview4 from "@/assets/overview4.jpg";

interface OverviewProps {}

const Overview: FC<OverviewProps> = () => {
  return (
    <div className="mt-32 w-[1200px] h-[341px] bg-gray-700">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl py-3">
          Penerration Testing Overview
        </h2>
        <div className="w-[1200px] h-[359px]">
          <div className="w-[385px] h-[122px] bg-black">
            <h6 className="uppercase">test</h6>
            <Image src={overview1} />
            <Image
              src={Logo}
              className="md:w-[75px] md:h-[75px] w-14 h-14"
              width={75}
              height={75}
              alt=""
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

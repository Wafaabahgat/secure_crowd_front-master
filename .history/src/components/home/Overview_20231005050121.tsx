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
    <div className="mt-32 w-[1200px] h-[550px] ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl py-3 mb-24">
          Penerration Testing Overview
        </h2>

        <div className="w-[1200px] h-[359px] grid grid-cols-3 ">
          <div className="">
            <div className="w-[400px] h-[122px] mb-[60px]">
              <h6 className="uppercase font-semibold text-xl flex text-center justify-center">
                test
              </h6>
              <Image src={overview1} alt="" width={385} />d
            </div>
            <div className="w-[400px] h-[122px]">
              <h6 className="uppercase font-semibold text-xl flex text-center justify-center">
                re-testing
              </h6>
              <Image src={overview2} alt="" />
            </div>
          </div>

          <Image src={overviewI} width={352} height={341} alt="" />
          <div>
            <div className="w-[400px] h-[122px] mb-[60px]">
              <h6 className="uppercase font-semibold flex  text-xl text-center justify-center">
              preporting
              </h6>
              <Image src={overview3} alt="" />d
            </div>
            <div className="w-[400px] h-[122px] ">
              <h6 className="uppercase font-semibold  flex text-xl text-center justify-center">
                review
              </h6>
              <Image src={overview4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

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
    <div className=" w-[1200px] h-[550px] ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold lg:text-3xl md:text-2xl sm:text-xl py-3 mb-24">
          Penerration Testing Overview
        </h2>

        <div className="lg:w-[1200px] h-[359px] grid lg:grid-cols-3 md:grid-cols-3 md:w-[780px] sm:grid-row">
          <div className="">
            <div className="lg:w-[400px] h-[122px] mb-[60px] ">
              <h6 className="uppercase font-semibold text-xl flex text-center justify-center">
                test
              </h6>
              <Image src={overview1} alt="" width={352} height={341}/>
            </div>
            <div className="lg:w-[400px] h-[122px]  ">
              <h6 className="uppercase font-semibold text-xl flex text-center justify-center">
                re-testing
              </h6>
              <Image src={overview2} alt="" width={352} height={341}/>
            </div>
          </div>

          <Image src={overviewI} width={352} height={341} alt="" />
          <div>
            <div className="lg:w-[400px] h-[122px] mb-[60px]  ">
              <h6 className="uppercase font-semibold flex  text-xl text-center justify-center">
                preporting
              </h6>
              <Image src={overview3} alt="" width={352} height={341}/>
            </div>
            <div className="lg:w-[400px] h-[122px]  ">
              <h6 className="uppercase font-semibold  flex text-xl text-center justify-center">
                review
              </h6>
              <Image src={overview4} alt="" width={352} height={341}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
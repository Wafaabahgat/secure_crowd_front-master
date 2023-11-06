import { FC } from "react";
import Image from "next/image";
import overviewI from "@/assets/overviewI.png";
import Title from "../UI/Title";
import OverviewBox from "../Card/OverviewBox";

interface OverviewProps {}

const Overview: FC<OverviewProps> = () => {
  return (
    <div className="mt-10 lg:w-[1200px] lg:h-[550px] ">
      <div className="flex flex-col justify-center items-center gap-y-6">
        <Title ttl="Penerration Testing Overview" />
        <div className="lg:w-[1200px] mt-6 lg:h-[359px] grid lg:grid-cols-3 md:grid-cols-3 md:w-[780px] grid-row">
          <div>
            <OverviewBox ttl1="testing" num="01" />
            <OverviewBox ttl1="re-testing" num="02" />
          </div>
          <Image src={overviewI} width={352} height={341} alt="" />
          <div>
            <OverviewBox ttl1="preporting" num="03" />
            <OverviewBox ttl1="review" num="04" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

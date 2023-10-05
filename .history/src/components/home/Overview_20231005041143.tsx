import { FC } from "react";
import Image from "next/image";

interface OverviewProps {}

const data = [
    { ttl: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
    nonummy nibh euismod tincidunt ut laoreet "},
    // { ttl: "product", link: "/product" },
    // { ttl: "customers", link: "/customers" },
    // { ttl: "blog", link: "/blog" },
    // { ttl: "company", link: "/company" },
  ];

const Overview: FC<OverviewProps> = () => {
  return (
    <div className="mt-32 w-[1200px] h-[341px] bg-gray-700">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl py-3">
          Penerration Testing Overview
        </h2>
        <div className="w-[1200px] h-[359px]">
          <div>
            <h6 className="uppercase">test</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

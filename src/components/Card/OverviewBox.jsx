import React from "react";
import TestingBox from "./TestingBox";

const OverviewBox = ({ ttl1, num }) => {
  return (
    <>
      <div>
        <div className="lg:w-[400px] h-[122px] mb-[60px]">
          <h6 className="uppercase font-semibold text-xl flex text-center justify-center">
            {ttl1}
          </h6>
          <TestingBox
            ttl="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet"
            num={num}
          />
        </div>
      </div>
    </>
  );
};

export default OverviewBox;

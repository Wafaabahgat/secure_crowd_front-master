import React from "react";

const TestingBox = ({ ttl, num }) => {
  return (
    <>
      <div className="relative border border-main w-[365px] max-w-[100%] text-center font-semibold bg-secondaryBlack text-white rounded-lg px-2 py-8 flex items-center justify-center">
        <p>{ttl}</p>
        <span className="absolute top-[-20%] left-3 bg-main font-bold w-[37px] h-[37px] flex items-center justify-center rounded-full border border-white">
          {num}
        </span>
      </div>
      
    </>
  );
};

export default TestingBox;

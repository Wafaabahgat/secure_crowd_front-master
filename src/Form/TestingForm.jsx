import React from "react";
import TestingBox from "../Form/TestingBox";

const TestingForm = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-y-9 mt-4">
        <div className="flex">
          <TestingBox
            ttl="Creation is your job, and security is ours"
            num="01"
          />
          <span className="my-auto h-[2px] w-[30px] border border-main border-dashed"></span>
        </div>
        <div className="flex">
          <TestingBox
            ttl="rules of engagement, and test objectives."
            num="02"
          />
          <span className="my-auto h-[2px] w-[30px] border border-main border-dashed"></span>
        </div>
        <div>
          <TestingBox
            ttl="Actively exploit vulnerabilities in the system"
            num="03"
          />
        </div>
        <div className="flex">
          <TestingBox
            ttl="Detail vulnerabilities found, potential and remediation recommendations"
            num="04"
          />
          <span className="my-auto h-[2px] w-[30px] border border-main border-dashed"></span>
        </div>
        <div className="flex">
          <TestingBox
            ttl="Address and fix identified vulnerabilities"
            num="05"
          />
          <span className="my-auto h-[2px] w-[30px] border border-main border-dashed"></span>
        </div>
        <TestingBox
          ttl="Verify that vulnerabilities are effectively patched and no new issues are introduced"
          num="06"
        />
      </div>
    </>
  );
};

export default TestingForm;

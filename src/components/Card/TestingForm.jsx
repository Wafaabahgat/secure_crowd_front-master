import React from "react";
import TestingBox from "./TestingBox";

const TestingForm = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-9 gap-x-4 mt-4">
        <div className="flex">
          <TestingBox
            ttl="Creation is your job, and security is ours"
            num="01"
          />
        </div>
        <div className="flex">
          <TestingBox
            ttl="rules of engagement, and test objectives."
            num="02"
          />
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
        </div>
        <div className="flex">
          <TestingBox
            ttl="Address and fix identified vulnerabilities"
            num="05"
          />
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

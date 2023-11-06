import React from "react";

const Title = ({ttl}) => {
  return (
    <>
      <h2 className="font-semibold lg:text-4xl md:text-3xl text-2xl  py-3">
      {ttl}
      </h2>
    </>
  );
};

export default Title;

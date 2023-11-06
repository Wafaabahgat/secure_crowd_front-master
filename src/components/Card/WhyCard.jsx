import Image from "next/image";
import React from "react";

const WhyCard = () => {
  return (
    <div className="text-center">
      <Image
        width={70}
        height={70}
        src={src}
        className="mx-auto w-[70px] h-[70px]"
        alt=""
        draggable={false}
      />
      <h2 className="font-semibold text-xl text-white my-4">{ttl}</h2>
      <p>{disc}</p>
    </div>
  );
};

export default WhyCard;

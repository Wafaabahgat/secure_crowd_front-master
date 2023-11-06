import Image from "next/image";
import React from "react";

const ClientImage = ({src}) => {
  return (
    <div className="py-4 px-5 w-full h-[75px] bg-slate-100 rounded-lg">
      <Image
        src={src}
        className="object-contain w-full h-full"
        alt=""
        draggable={false}
      />
    </div>
  );
};

export default ClientImage;

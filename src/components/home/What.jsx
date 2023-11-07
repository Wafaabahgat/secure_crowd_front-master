"use client";
import React, { useState } from "react";
import Title from "../UI/Title";
import Image from "next/image";
import avatar from "@/assets/Avatar.png";
import { CommentCard } from "../Card/CommentCard";
import activeCircle from "@/assets/svg/icons/activeCircle.svg";
import circle from "@/assets/svg/icons/circle.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const comments = [
  {
    id: 1,
    img: avatar,
    ttl: "Cédric de Saint Léger 1",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
  {
    id: 2,
    img: avatar,
    ttl: "Cédric de Saint Léger 2",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
  {
    id: 3,
    img: avatar,
    ttl: "Cédric de Saint Léger 3",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
  {
    id: 4,
    img: avatar,
    ttl: "Cédric de Saint Léger 4",
    subTtl: "CTO at impak Analytics",
    disc: "The team at SecureCrowd has helped us at impak identify some vulnerabilities on our website. Their work is very thorough and they have been going above and beyond expectations. Thank you  SecureCrowd !",
  },
];

const What = () => {
  const [current, setcurrent] = useState(1);

  const handleNext = () => {
    if (comments?.length === current) {
      setcurrent(1);
    } else {
      setcurrent(current + 1);
    }
  };
  const handlePrev = () => {
    if (current > 1) {
      setcurrent(current - 1);
    } else {
      setcurrent(comments?.length);
    }
  };

  return (
    <div className="w-full py-5">
      <div className="flex items-center justify-center">
        <Title ttl="What Our Clients Say About Us" />
      </div>
      <div className="lg:mx-[7%] mx-[4%] ">
        <div className="bg-secondaryBlack z-[-1] rounded-lg p-4">
          <div className="text-center relative z-0 rounded-md overflow-hidden p-5 what">
            <div className="flex">
              {comments?.map((e, i) => {
                return i + 1 === current ? (
                  <CommentCard
                    className="w-max"
                    key={e.id}
                    avatar={e.img}
                    disc={e.disc}
                    ttl={e.ttl}
                    subTtl={e.subTtl}
                  />
                ) : (
                  ""
                );
              })}
            </div>
            <div className="flex gap-2 items-center justify-center">
              <Image
                className="active:scale-90 cursor-pointer"
                onClick={() => setcurrent(1)}
                src={current == 1 ? activeCircle : circle}
                alt=""
              />
              <Image
                className="active:scale-90 cursor-pointer"
                onClick={() => setcurrent(2)}
                src={current == 2 ? activeCircle : circle}
                alt=""
              />
              <Image
                className="active:scale-90 cursor-pointer"
                onClick={() => setcurrent(3)}
                src={current == 3 ? activeCircle : circle}
                alt=""
              />
              <Image
                className="active:scale-90 cursor-pointer"
                onClick={() => setcurrent(4)}
                src={current == 4 ? activeCircle : circle}
                alt=""
              />
            </div>
            <button
              className="absolute  right-10 bottom-5 flex justify-center items-center"
              onClick={handlePrev}
            >
              <FaArrowLeft className="text-2xl text-slate-50 bg-slate-900 rounded-full" />
            </button>
            <button
              className="absolute right-0 bottom-5 flex justify-center items-center"
              onClick={handleNext}
            >
              <FaArrowRight className="text-2xl text-slate-50 bg-slate-900 rounded-full" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;

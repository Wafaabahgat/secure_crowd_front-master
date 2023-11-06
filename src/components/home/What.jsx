"use client"
import React, { useState } from "react";
import Title from "../UI/Title";
import Image from "next/image";
import avatar from "@/assets/Avatar.png";
import { CommentCard } from "../Card/CommentCard";

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
    if (current < comments.length) {
      setcurrent(current + 1);
    }
    if (current === comments.length) {
      setcurrent(1);
    }
  };
  const handleBack = () => {
    if (current > 1) {
      setcurrent(current - 1);
    }
    if (current === 1) {
      setcurrent(4);
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
                return current === e.id ? (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;

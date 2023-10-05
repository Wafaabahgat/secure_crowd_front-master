import { FC } from "react";
import Image from "next/image";
import client from "@/assets/client.png";

interface TestingProps {}

const Testing: FC<TestingProps> = () => {
  return (
    <div className="mt-32 w-[1212px] h-[1067px] bg-gray-100">
      <div>
        <h2></h2>
      </div>
    </div>
  );
};

export default Testing;
// width: 1212px
// height: 1067px
// top: 1381px
// left: 114px

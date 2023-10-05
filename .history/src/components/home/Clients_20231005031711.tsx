import { FC } from "react";
import Image from "next/image";
import client from "@/assets/client.png";

interface ClientsProps {}

const Clients: FC<ClientsProps> = () => {
  return (
    <div className="mt-32 w-[1200px] h-[341px] bg-gray-400 ">
      <div className="flex ">
        <div className="">
          <h2 className="font-semibold text-3xl py-3">Our clients</h2>
          <div className="flex">
            <Image src={client} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

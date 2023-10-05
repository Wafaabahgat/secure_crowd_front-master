import { FC } from "react";
import Image from "next/image";
import client from "@/assets/client.png";

interface ClientsProps {}

const Clients: FC<ClientsProps> = () => {
  return (
    <div className="mt-32 w-[1200px] h-[341px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl py-3">Our clients</h2>
        <div className="mt-[65px] lg:w-[1158px] md:w-[800px] sm:w-[500px]">
          <Image src={client} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clients;

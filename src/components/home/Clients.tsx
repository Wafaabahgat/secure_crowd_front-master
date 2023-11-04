import { FC } from "react";
import Image from "next/image";
import client from "@/assets/client.png";
import Title from "../UI/Title";

interface ClientsProps {}

const Clients: FC<ClientsProps> = () => {
  return (
    <div className="mt-32 w-[1200px] h-[341px]">
      <div className="flex flex-col justify-center items-center">
      <Title ttl="Our clients" />
        <div className="mt-[65px] lg:w-[1158px] md:w-[800px] sm:w-[500px]">
          <Image src={client} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clients;

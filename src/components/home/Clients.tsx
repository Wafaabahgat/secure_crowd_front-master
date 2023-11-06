import { FC } from "react";
import airbnb from "@/assets/airbnb.png";
import Amazon from "@/assets/Amazon.png";
import Fedex from "@/assets/Fedex.png";
import microsoft from "@/assets/microsoft.png";
import google from "@/assets/google.png";
import OYO from "@/assets/OYO.png";
import Ola from "@/assets/Ola.png";
import Walmart_logo_PNG1 from "@/assets/Walmart_logo_PNG1.png";
import Title from "../UI/Title";
import ClientImage from "../Card/ClientImage";

interface ClientsProps {}

const Clients: FC<ClientsProps> = () => {
  return (
    <div className="mt-32 ">
      <div className="flex flex-col justify-center items-center">
        <Title ttl="Our clients" />
        <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 mt-4">
          <ClientImage src={airbnb} />
          <ClientImage src={Amazon} />
          <ClientImage src={Fedex} />
          <ClientImage src={google} />
          <ClientImage src={microsoft} />
          <ClientImage src={OYO} />
          <ClientImage src={Ola} />
          <ClientImage src={Walmart_logo_PNG1} />
        </div>
      </div>
    </div>
  );
};

export default Clients;

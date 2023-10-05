import { FC } from "react";

interface ClientsProps {}

// const data = [
//   { ttl: "home", link: "/" },
// ];

const Clients: FC<ClientsProps> = () => {
  return (
    <div className="mt-32 w-[1200px] h-[341px] bg-gray-400">
      <div className="flex  justify-center">
        <h2 className="font-semibold text-3xl py-3">Our clients</h2>
        <div></div>
      </div>
    </div>
  );
};

export default Clients;

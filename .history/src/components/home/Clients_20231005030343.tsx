import { FC } from "react";

interface ClientsProps {}

// const data = [
//   { ttl: "home", link: "/" },
// ];

const Clients: FC<ClientsProps> = () => {
  return (
    <div className="mt-32 max-w-[1200px] max-h-[341px] bg-gray-400">
      <div>      <h2 className="font-semibold text-3xl">Our clients</h2>
</div>
    </div>
  );
};

export default Clients;
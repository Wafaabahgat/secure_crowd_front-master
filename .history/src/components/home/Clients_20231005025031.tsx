import { FC } from "react";

interface ClientsProps {}

const Clients: FC<ClientsProps> = () => {
  return (
    <div className="mt-32 max-w-[] maxx">
      <div>
        <h2 className="font-semibold text-3xl">Our clients</h2>
      </div>
    </div>
  );
};

export default Clients;

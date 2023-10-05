import { FC } from "react";

interface ClientsProps {}

const data = [
  { ttl: "home", link: "/" },
  { ttl: "product", link: "/product" },
  { ttl: "customers", link: "/customers" },
  { ttl: "blog", link: "/blog" },
  { ttl: "company", link: "/company" },
];

const Clients: FC<ClientsProps> = () => {
  return (
    <div className="mt-32 max-w-[1200px] max-h-[341px]">
      <div className="flex item justify-center ">
        <h2 className="font-semibold text-3xl">Our clients</h2>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Clients;
import Image from "next/image";

export const CommentCard = ({
  children,
  avatar,
  ttl,
  subTtl,
  disc,
  className,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <Image src={avatar} alt="" />
        <div>
          <h2 className="text-white sm:text-3xl text-xl mb-2">{ttl}</h2>
          <p className="sm:text-base text-sm">{subTtl}</p>
        </div>
      </div>
      <p className="qoute relative font-semibold sm:mx-16 mx-6 text-center my-10">
        {disc}
      </p>
    </div>
  );
};


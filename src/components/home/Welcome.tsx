import Image from "next/image";
import { FC } from "react";
import welcome from "@/assets/svg/welcome/home_bg.png";
import { cn } from "@/utils/utils";
import { russo } from "@/utils/fonts";
import { Mail } from "lucide-react";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
  return (
    <div className="relative  z-10 lg:mx-[7%] lg:text-base text-sm font-medium mx-[4%] grid md:grid-cols-7 grid-cols-1 items-center md:flex-row flex-col h-max ">
      <div className="w-full md:col-span-4 md:place-self-center place-self-start mt-6 text-white">
        <h2 className={cn(russo.className, "lg:text-5xl sm:text-4xl text-2xl")}>
          Welcome to SecureCrowd Your Digital Fortress
        </h2>
        <p className="lg:text-3xl md:text-xl text-2xl mt-4 mb-8 mr-10">
          Get Prepared, And Hack Your <br /> Application Before Real
          <br />
          Hackers Do!
        </p>
        <div className="w-fit border text-text border-text rounded-md sm:p-3 p-2 sm:text-base text-xs flex gap-3 items-center">
          <Mail className="min-w-[24px] min-h-[24px] w-6" />
          <input
            className="bg-transparent  text-text outline-none w-full"
            type="text"
            placeholder="Enter your email"
          />
          <button className="text-white sm:whitespace-nowrap w-full py-2 px-6 bg-gradient-to-b from-[#325FE3] to-[#367FD3] rounded-md">
            Request a Demo
          </button>
        </div>
      </div>
      <div className="absolute h-[300px] -top-10 -right-20 lg:w-[800px] md:w-[750px] sm:w-[500px] z-[-1] md:col-span-3 mt-14">
        <Image
          src={welcome}
          alt=""
          className="object-contain md:opacity-100 opacity-60"
        />
        {/* <div className="welcome"></div> */}
      </div>
    </div>
  );
};

export default Welcome;

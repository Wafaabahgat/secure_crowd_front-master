import Image from "next/image";
import Logo from "@/assets/logo_svg.svg";
import Button from "../UI/Button";

const Footer = () => {
  return (
    <div className="lg:mx-[7%] mx-[4%]">
      <div className="bg-secondaryBlack z-[-1] rounded-lg p-4 w-full ">
        <div className="text-center relative z-0 rounded-md p-5 Footer grid grid-cols-2">
          <div className="ml-12">
            <div className="flex min-w-max items-center gap-1 mb-2 ">
              <Image
                src={Logo}
                className="md:w-[75px] md:h-[75px] w-14 h-14"
                width={75}
                height={75}
                alt=""
                draggable={false}
              />
              <span className="font-bold">SecuredCrowed</span>
            </div>
            <div className="flex flex-col items-start gap-y-4 w-full">
              <p className="text-sm">
                Get Prepared, And Hack Your Application Before Real Hackers Do!
              </p>
              <div className="rounded-full py-2 px-4 flex gap-2 items-center border border-border">
                <input
                  className="w-full rounded-md bg-transparent outline-none"
                  type="text"
                  placeholder="Your email"
                />
                <Button txt="get statred" className="px-4 whitespace-nowrap" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <ul>
                <li className="text-white font-semibold mb-2">About</li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  About Us
                </li>
                <li className="text-sm cursor-pointer text-text mb-2">Blog</li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Careers
                </li>
                <li className="text-sm cursor-pointer text-text mb-2">Jobs</li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  In Press
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-white font-semibold mb-2">FAQ</li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Account
                </li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Manege Deliveries
                </li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Orders
                </li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Payments
                </li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Returns
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-white font-semibold mb-2">Support</li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Contact Us
                </li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Online Chat
                </li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Whatsapp
                </li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Telegram
                </li>
                <li className="text-sm cursor-pointer text-text mb-2">
                  Ticketing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

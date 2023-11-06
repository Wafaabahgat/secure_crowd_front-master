import { cn } from "@/utils/utils";

const Button = ({ txt, className }) => {
  return (
    <button
      className={cn(
        className,
        "bg-btn hover:bg-btn/80 active:scale-90 h-[40px] lg:w-[150px] w-[120px] flex items-center justify-center rounded-full"
      )}
    >
      {txt}
    </button>
  );
};

export default Button;

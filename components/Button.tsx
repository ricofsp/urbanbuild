import { RiArrowRightUpLine } from "react-icons/ri";

interface ButtonProps {
  text: String;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button
      className="w-[210px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center
    justify-between min-w-[200px] group bg-accent"
    >
      <div
        className="flex-1 text-center tracking-[1.2px] font-dmSans font-bold text-black 
      text-sm uppercase"
      >
        {text}
      </div>
      <div className="flex items-center justify-center bg-black w-11 h-11">
        <RiArrowRightUpLine className="text-xl text-white transition-all duration-200 group-hover:rotate-45" />
      </div>
    </button>
  );
};

export default Button;

'use client'
import { GitIcon, InIcon, BskIcon, CvIcon } from "../icons";

export const Social: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center gap-[.5rem] flex-row lg:flex-col h-full">
      <button
        className="w-[6%] lg:w-[60%] xl:w-[45%] text-[#1A202C] hover:text-orange-500 cursor-pointer transition-colors duration-200"
        onClick={() => window.open("https://github.com/rhtua", "_blank")}
      >
        <GitIcon />
      </button>
      
      <button
        className="w-[10%] lg:w-[60%] xl:w-[45%] text-[#1A202C] hover:text-orange-500 cursor-pointer transition-colors duration-200"
        onClick={() =>
          window.open("https://www.linkedin.com/in/rhtua/", "_blank")
        }
      >
        <InIcon />
      </button>
      
      <button
        className="w-[8%] lg:w-[60%] xl:w-[45%] text-[#1A202C] hover:text-orange-500 cursor-pointer transition-colors duration-200"
        onClick={() =>
          window.open("https://bsky.app/profile/rhtua.com.br", "_blank")
        }
      >
        <BskIcon />
      </button>
      
      <button
        className="w-[7%] lg:w-[60%] xl:w-[45%] text-[#1A202C] hover:text-orange-500 cursor-pointer transition-colors duration-200"
        onClick={() =>
          window.open("https://www.rhtua.com.br/Arthur-Fusieger-Resume.pdf")
        }
      >
        <CvIcon />
      </button>
    </div>
  );
};

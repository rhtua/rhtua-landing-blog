'use client'
import { aboutText } from "../../translation/about";

export const SkillsSlide: React.FC = () => {
  const text = aboutText;

  return (
    <div className="flex flex-col h-auto lg:h-full w-full justify-center">
      {/* Mobile Section Header */}
      <div className="flex flex-col px-3 w-full items-start my-4 mb-8 opacity-70 lg:hidden">
        <h2 className="cursor-pointer select-none text-2xl font-semibold text-orange-500">
          {text.skills}
        </h2>
        <div className="w-full h-0.5 bg-orange-500"></div>
      </div>

      {/* Main Content */}
      <div className="w-full text-gray-200 flex items-center justify-center xl:justify-start px-4 lg:px-4 xl:px-8 flex-col lg:flex-row">
        {/* Education Section */}
        <div className="w-full xl:w-1/2 flex flex-col items-start pr-0 lg:pr-2 h-auto lg:h-full gap-5 lg:gap-10 xl:gap-10">
          <h3 className="text-2xl md:text-base lg:text-lg xl:text-4xl font-bold">
            {text.skillList.education.name}
          </h3>
          
          <div className="flex flex-col-reverse justify-start">
            {Object.values(text.skillList.education.items).map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-start mb-5 lg:mb-6 xl:mb-8"
                >
                  <h4 className="text-lg md:text-base lg:text-base xl:text-3xl font-semibold text-left">
                    {item.name}
                  </h4>
                  <p className="text-sm md:text-xs lg:text-xs xl:text-lg font-medium text-left underline">
                    {item.institution}
                  </p>
                  <p className="text-base md:text-base lg:text-base xl:text-3xl font-semibold text-left">
                    {item.duration}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-0.5 lg:h-full w-full lg:w-0.5 bg-gray-400 my-10" />

        {/* Skills Section */}
        <div className="w-full xl:w-1/2 flex flex-col md:flex-row lg:flex-col items-start gap-10 mb-10 md:mb-0 lg:mb-4 h-auto lg:h-full pl-0 lg:pl-5">
          {/* Hard Skills */}
          <div className="flex flex-col items-start mb-7 lg:mb-0">
            <h3 className="text-2xl md:text-base lg:text-lg xl:text-4xl font-bold mb-8">
              {text.skillList.hardSkills.name}
            </h3>
            <div className="w-full flex gap-3 flex-wrap">
              {Object.values(text.skillList.hardSkills.items).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-fit flex justify-center border border-gray-400 rounded-lg px-2 py-1"
                  >
                    <span className="text-sm md:text-xs lg:text-xs xl:text-lg font-medium text-left">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="flex flex-col items-start">
            <h3 className="text-2xl md:text-base lg:text-lg xl:text-4xl font-bold mb-8">
              {text.skillList.softSkills.name}
            </h3>
            <div className="w-full flex gap-3 flex-wrap">
              {Object.values(text.skillList.softSkills.items).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-fit flex justify-center border border-gray-400 rounded-lg px-2 py-1"
                  >
                    <span className="text-sm md:text-xs lg:text-xs xl:text-lg font-medium text-left">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
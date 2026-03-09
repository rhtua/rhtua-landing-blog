'use client'
import { aboutText } from "../../translation/about";

export const WorkSlide: React.FC = () => {
  const text = aboutText;

  return (
    <div className="w-full h-auto lg:h-full flex flex-col justify-center">
      {/* Mobile Section Header */}
      <div className="flex flex-col px-4 w-full items-start my-[5%] mt-[3%] opacity-70 lg:hidden">
        <h2 className="cursor-pointer select-none text-2xl font-semibold text-landing-accent">
          {text.work}
        </h2>
        <div className="w-full h-0.5 bg-landing-accent" />
      </div>

      {/* Work Experience Items */}
      {Object.values(text.workExperiences).map((item, index) => {
        return (
          <div
            key={item.name}
            className="flex flex-row lg:flex-col-reverse gap-4 ml-[5%] lg:ml-0 mb-0 lg:mb-[3%] xl:mb-[4%] w-full px-0 lg:px-8"
          >
            {/* Timeline */}
            <div className="ml-2 w-0.5 lg:w-full flex flex-col items-center">
              <div className="lg:hidden">
                <div 
                  className={`w-0.5 bg-gray-50 ${
                    index === 0 ? 'h-[12px]' : 'h-[7px]'
                  }`}
                />
                <div className="h-3 w-3 p-0.5 bg-gray-50 rounded-full">
                  <div className="h-full w-full bg-gray-900 rounded-full" />
                </div>
              </div>
              <div className="h-full lg:h-0.5 w-0.5 lg:w-full bg-gray-50" />
            </div>

            {/* Content Grid */}
            <div className="px-0 lg:px-[5%] text-gray-50 w-full opacity-90 gap-4 lg:gap-0 grid grid-cols-1 lg:grid-cols-[2fr_3fr_4fr]">
              {/* Period */}
              <div className="flex flex-col items-start pl-[10%] lg:pl-0 justify-between lg:justify-center">
                <span className="whitespace-nowrap text-lg lg:text-xl xl:text-2xl 2xl:text-4xl font-semibold">
                  {item.period}
                </span>
                <span className="whitespace-nowrap text-sm xl:text-base 2xl:text-lg font-medium">
                  {item.timespan}
                </span>
              </div>

              {/* Company Name */}
              <div className="content-center px-0 lg:px-6 xl:px-12 w-full row-start-1 lg:row-auto">
                <h3 
                  className={`text-xl xl:text-2xl 2xl:text-4xl text-left font-bold ${
                    index === 0 ? 'mt-[4%]' : 'mt-0'
                  } ${
                    item.name.length > 12 ? 'whitespace-normal' : 'whitespace-nowrap'
                  }`}
                >
                  {item.name}
                </h3>
              </div>

              {/* Role and Technologies */}
              <div className="content-center pl-[10%] lg:pl-[6%] flex justify-end w-fit lg:w-full">
                <div className="flex flex-col items-start mb-10 lg:mb-0 justify-center w-full">
                  <span className="text-lg lg:text-sm xl:text-2xl 2xl:text-5xl font-semibold">
                    {item.role}
                  </span>
                  <span className="text-xs lg:text-sm xl:text-base 2xl:text-xl font-medium whitespace-nowrap">
                    {item.technologies}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

'use client'
import { useState, useEffect, useRef } from "react";
import { mainText } from "../translation/main";
import { Homepage, Opening } from ".";
import { About } from "./about";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Social } from "./homepage/Social";

export const BasePage: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isLargerThanLg, setIsLargerThanLg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const text = mainText;

  useEffect(() => {
    const handleResize = () => {
      setIsLargerThanLg(window.innerWidth >= 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideTo = (index: number) => {
    swiperRef?.current?.swiper.slideTo(index);
  };

  return (
    <div className="flex flex-col bg-gray-50 w-screen h-screen items-center overflow-hidden justify-center">
      <Opening />
      
      {/* Header */}
      <div className="h-[8%] w-full flex items-center justify-between px-2 md:px-3 xl:px-4">
        {/* Experience Button - Desktop Only */}
        {isLargerThanLg && (
          <div
            className="cursor-pointer flex flex-col group buttonHover"
            onClick={() => slideTo(1)}
          >
            <span className="text-xs md:text-sm xl:text-base font-normal select-none text-gray-900">
              {text.experience}
            </span>
            <div className="bg-gray-900 h-px w-0 group-hover:w-full transition-all duration-300" />
          </div>
        )}

        {/* Logo */}
        <div
          className="flex items-end gap-0.5 cursor-pointer -mt-1"
          onClick={() => slideTo(0)}
        >
          <span className="text-2xl md:text-3xl xl:text-5xl font-semibold select-none text-gray-900 p-1 font-montserrat">
            arthur
            <span className="text-orange-500 text-3xl md:text-4xl xl:text-3xl">
              .
            </span>
          </span>
        </div>

        {/* Contact Button - Desktop Only */}
        {isLargerThanLg && (
          <div
            className="cursor-pointer flex flex-col group buttonHover"
            onClick={() => window.open("mailto:contato@rhtua.com.br")}
          >
            <span className="text-xs md:text-sm xl:text-base font-normal lg:font-normal select-none text-gray-900">
              {text.contact}
            </span>
            <div className="bg-gray-900 h-px w-0 group-hover:w-full transition-all duration-300"></div>
          </div>
        )}

        {/* Mobile Menu */}
        {!isLargerThanLg && (
          <div className="relative">
            <button
              className="flex flex-col group buttonHover text-xs md:text-sm xl:text-base font-medium lg:font-normal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {text.menu}
              <div className="bg-gray-900 h-px w-0 group-hover:w-full transition-all duration-300"></div>
            </button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  onClick={() => setIsMenuOpen(false)}
                />
                
                {/* Menu Content */}
                <div className="absolute top-full right-0 w-screen bg-white z-50 border-t border-gray-200">
                  <div className="w-full flex flex-col items-center py-4 gap-5">
                    <button
                      className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded min-w-[50%] transition-colors duration-300"
                      onClick={() => {
                        window.open("mailto:contato@rhtua.com.br");
                        setIsMenuOpen(false);
                      }}
                    >
                      {text.getInTouch}
                    </button>
                    
                    <div className="relative min-w-[40%]">
                      <div className="bg-gray-400 h-px w-full" />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                        {text.or}
                      </div>
                    </div>
                    
                    <Social />
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="w-full h-full px-1 lg:px-0 flex items-center">
        {/* Left Spacer */}
        <div className="h-full w-[2%] md:w-[3%] xl:w-[10%]" />
        
        {/* Content Area */}
        <div className="w-full h-full bg-gray-900 rounded-2xl px-0 lg:px-4 flex justify-center">
          <Swiper
            ref={swiperRef}
            className="mySwiper swiper-h w-full h-full"
            allowTouchMove={false}
            direction={"vertical"}
            modules={[Pagination]}
          >
            <SwiperSlide key={0}>
              <Homepage slideTo={slideTo} />
            </SwiperSlide>
            <SwiperSlide key={1}>
              <About />
            </SwiperSlide>
          </Swiper>
        </div>
        
        {/* Side Menu - Desktop Only */}
        {isLargerThanLg && (
          <div className="h-full w-[2%] md:w-[3%] xl:w-[10%]">
            <Social />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="h-[3%] lg:h-[10%] w-full flex items-center justify-center px-16">
        <span className="text-xs lg:text-sm text-gray-600">
          © {new Date().getFullYear()} - {text.rights}
        </span>
      </div>
    </div>
  );
};

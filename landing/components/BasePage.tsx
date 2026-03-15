'use client';
import { useState, useRef } from 'react';
import { mainText } from '../translation/main';
import { Homepage, Opening } from '.';
import { About } from './about';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Social } from './homepage/Social';
import { WaveBackground } from './WaveBackground';
import Link from 'next/link';

export const BasePage: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const text = mainText;

  const slideTo = (index: number) => {
    swiperRef?.current?.swiper.slideTo(index);
  };

  return (
    <div className='flex flex-col bg-gray-50 w-screen h-screen items-center overflow-hidden justify-center'>
      <Opening />

      {/* Header */}
      <div className='h-[8%] w-full flex items-center justify-between px-2 md:px-[3%] xl:px-[4%]'>
        {/* Experience Button - Desktop Only */}
        <div
          className='hidden lg:flex cursor-pointer flex-col group buttonHover'
          onClick={() => window.open('mailto:contato@rhtua.com.br')}
        >
          <span className='text-xs md:text-sm xl:text-base font-normal lg:font-normal select-none text-gray-900'>
            {text.contact}
          </span>
          <div className='bg-gray-900 h-px w-0 group-hover:w-full transition-all duration-300'></div>
        </div>

        {/* Logo */}
        <div
          className='flex items-end gap-0.5 cursor-pointer lg:ml-[-7%]'
          onClick={() => slideTo(0)}
        >
          <span className='text-2xl md:text-3xl xl:text-4xl font-semibold select-none text-gray-900 p-1'>
            arthur
            <span className='text-landing-accent text-3xl md:text-4xl xl:text-3xl'>
              .
            </span>
          </span>
        </div>

        {/* Contact Button - Desktop Only */}
        <Link
          className='hidden lg:flex cursor-pointer flex-col group buttonHover'
          href={'/posts'}
        >
          <span className='text-xs md:text-sm xl:text-base font-normal lg:font-normal select-none text-gray-900'>
            BLOG
          </span>
          <div className='bg-gray-900 h-px w-0 group-hover:w-full transition-all duration-300'></div>
        </Link>

        {/* Mobile Menu */}
        <div className='relative lg:hidden'>
          <button
            className='flex flex-col group buttonHover text-xs md:text-sm xl:text-base font-medium lg:font-normal'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {text.menu}
            <div className='bg-gray-900 h-px w-0 group-hover:w-full transition-all duration-300'></div>
          </button>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className='fixed inset-0 bg-black bg-opacity-50 z-40'
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Content */}
              <div className='absolute top-full right-[-5] w-screen bg-white z-50 border-t border-gray-200'>
                <div className='w-full flex flex-col items-center py-4 gap-5'>
                  <button
                    className='border border-landing-accent text-landing-accent hover:bg-landing-accent hover:text-white px-6 py-2 rounded min-w-[50%] transition-colors duration-300'
                    onClick={() => {
                      window.open('mailto:contato@rhtua.com.br');
                      setIsMenuOpen(false);
                    }}
                  >
                    {text.getInTouch}
                  </button>

                  <div className='relative min-w-[40%]'>
                    <div className='bg-gray-400 h-px w-full' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4'>
                      {text.or}
                    </div>
                  </div>

                  <Social />
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className='w-full h-full px-1 lg:px-0 flex items-center'>
        {/* Left Spacer */}
        <div className='h-full w-[2%] md:w-[3%] xl:w-[10%]' />

        {/* Content Area */}
        <div className='w-full h-full bg-landing-bg rounded-2xl px-0 lg:px-4 flex justify-center landing-wave-bg'>
          <WaveBackground />
          <Swiper
            ref={swiperRef}
            className='mySwiper swiper-h w-full h-full'
            allowTouchMove={true}
            direction={'vertical'}
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
        <div className='h-full w-[2%] md:w-[3%] xl:w-[10%]'>
          <div className='hidden lg:block h-full'>
            <Social />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='h-[3%] lg:h-[10%] w-full flex items-center justify-center px-16'>
        <span className='text-xs lg:text-sm text-gray-600'>
          © {new Date().getFullYear()} - {text.rights}
        </span>
      </div>
    </div>
  );
};

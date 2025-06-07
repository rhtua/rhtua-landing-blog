'use client';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';
import { aboutText } from '../../translation/about';
import { WorkSlide } from './WorkSlide';
import { ProjectsSlide } from './ProjectsSlide';
import { SkillsSlide } from './SkillsSlide';

export const About: React.FC = () => {
  const [isLargerThanLg, setIsLargerThanLg] = useState(false);
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const text = aboutText;

  useEffect(() => {
    const handleResize = () => {
      setIsLargerThanLg(window.innerWidth >= 992); // 62em = 992px
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideTo = (index: number) => {
    swiperRef?.current?.swiper.slideTo(index);
  };

  return (
    <div className='flex flex-col h-full w-full'>
      {/* Desktop Navigation Header */}
      {isLargerThanLg && (
        <div className='flex text-gray-200 opacity-70 w-full font-semibold text-xs md:text-base lg:text-lg gap-16 justify-center pt-4 xl:pt-4'>
          <button
            className='cursor-pointer select-none hover:text-orange-400 transition-colors duration-200 aboutHeader'
            onClick={() => slideTo(0)}
            style={{ color: active === 0 ? '#F04A00' : '#EBEBEB' }}
          >
            {text.projects}
          </button>
          <button
            className='cursor-pointer select-none hover:text-orange-400 transition-colors duration-200 aboutHeader'
            onClick={() => slideTo(1)}
            style={{ color: active === 1 ? '#F04A00' : '#EBEBEB' }}
          >
            {text.skills}
          </button>
          <button
            className='cursor-pointer select-none hover:text-orange-400 transition-colors duration-200 aboutHeader'
            onClick={() => slideTo(2)}
            style={{ color: active === 2 ? '#F04A00' : '#EBEBEB' }}
          >
            {text.work}
          </button>
        </div>
      )}

      {/* Content Area */}
      <div className='flex h-full w-full' id='before'>
        <Swiper
          ref={swiperRef}
          className='projectsSwiper w-full h-full'
          onActiveIndexChange={(swiperCore: any) => {
            setActive(swiperCore.activeIndex);
          }}
          allowTouchMove={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {/* Desktop: Separate slides for Projects and Skills */}
          {isLargerThanLg && (
            <>
              <SwiperSlide key={0}>
                <div className='w-full h-full flex items-center justify-center'>
                  <ProjectsSlide />
                </div>
              </SwiperSlide>
              <SwiperSlide key={1}>
                <div className='w-full h-full flex items-center justify-center'>
                  <SkillsSlide />
                </div>
              </SwiperSlide>
            </>
          )}
          {/* First Slide - Work (Mobile: All content, Desktop: Work only) */}
          <SwiperSlide key={2}>
            <div
              className={`w-full h-full flex items-start flex-col justify-start lg:justify-center ${
                isLargerThanLg ? 'overflow-hidden' : 'overflow-y-auto'
              } overflow-x-hidden`}
            >
              <WorkSlide />
              {/* Mobile: Show all content in one slide */}
              {!isLargerThanLg && (
                <>
                  <ProjectsSlide />
                  <SkillsSlide />
                </>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

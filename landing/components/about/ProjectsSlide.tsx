'use client';
import Image from 'next/image';
import { aboutText } from '../../translation/about';
import { FigmaIcon, GitIcon } from '../icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useMediaQuery } from 'usehooks-ts';

export const ProjectsSlide: React.FC = () => {
  const text = aboutText;
  const isMobile = useMediaQuery('(max-width: 991px)');

  const makeItems = Object.values(text.projectsList).map((item, index) => {
    return (
      <div
        key={index}
        className='flex flex-col items-center justify-between lg:justify-center text-gray-100 max-w-full max-h-full'
      >
        {/* Project Name */}
        <h3 className='mb-8 text-xl md:text-xl xl:text-3xl 2xl:text-2xl font-semibold text-center'>
          {item.name}
        </h3>

        {/* Project Image with Overlay */}
        <div className='relative flex justify-center mb-4 sm:mb-6 xl:mb-10 w-full lg:w-1/2 xl:w-[90%] rounded-2xl select-none group'>
          <div className='relative w-full rounded-2xl overflow-hidden'>
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={300}
              className='w-full lg:min-h-[250px] object-contain lg:object-cover 2xl:object-contain rounded-2xl'
            />
            {/* Hover Overlay */}
            <div className='absolute inset-0 bg-gray-900 bg-opacity-90 rounded-2xl p-4 lg:p-2 2xl:p-8 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-200 select-none'>
              <p className='text-xs md:text-xs lg:text-sm xl:text-base 2xl:text-base font-medium text-center'>
                {item.description}
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <p className='text-sm xl:text-base 2xl:text-lg whitespace-nowrap font-normal text-gray-300 mb-2'>
          {item.technologies}
        </p>

        {/* Action Icons */}
        <div className='flex items-center justify-center gap-4 lg:gap-4 min-w-20 mt-2 lg:mt-4 xl:mt-6'>
          <button
            onClick={() => window.open(item.gitLink, '_blank')}
            className=' text-white hover:text-orange-500 transition-colors duration-200 cursor-pointer'
          >
            <GitIcon width={24} height={34} />
          </button>
          {item.figma && (
            <button
              onClick={() => window.open(item.figma, '_blank')}
              className=' text-white hover:text-landing-accent transition-colors duration-200 cursor-pointer'
            >
              <FigmaIcon width={20} />
            </button>
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className='flex flex-col w-full justify-center mt-4 md:mt-0 gap-2 lg:gap-6'>
        <div className='flex flex-col px-3 w-full items-start my-4 opacity-70 lg:hidden'>
          <h2 className='cursor-pointer select-none text-2xl font-semibold text-landing-accent'>
            {text.projects}
          </h2>
          <div className='w-full h-0.5 bg-landing-accent'></div>
        </div>

        <Swiper
          slidesPerView={!isMobile ? 2.2 : 1.2}
          spaceBetween={!isMobile ? 10 : 20}
          centeredSlides={isMobile}
          navigation={!isMobile}
          pagination={{
            clickable: true,
          }}
          className='projectsSwiper w-full'
          allowTouchMove={true}
          modules={[Pagination, Navigation]}
        >
          {makeItems.map((item, index) => (
            <SwiperSlide key={index} className='projectsSlide'>
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

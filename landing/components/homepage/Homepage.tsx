'use client';
import Link from 'next/link';
import { homeText } from '../../translation';
import './button.css';

export const Homepage: React.FC<{
  slideTo: (index: number) => void;
}> = ({ slideTo }) => {
  const text = homeText;
  return (
    <div className='relative w-full h-full background flex flex-col items-center justify-end text-[#ebebeb] text-[180%] sm:text-[170%] md:text-[180%] lg:text-[280%] xl:text-[72px]'>
      <Link
        href='/posts'
        className='absolute flex top-0 bg-white text-[1rem] mt-2 px-4 py-2 z-[100] rounded-full text-[#F04A00] font-semibold lg:hidden'
      >
        {text.myBlog}
      </Link>
      <div className='w-full h-full flex flex-col items-center justify-end lg:justify-center px-[2%] mt-0 lg:mt-[30%] mb-[5%] lg:mb-0'>
        <div className='z-[1] font-semibold flex'>
          <span>
            {text.hi}
            <span className='text-[#F04A00]'>,</span>
          </span>
        </div>
        <div className='z-[1] font-semibold mb-8 flex'>
          <span>
            {text.se}
            <span className='text-[#F04A00]'>.</span>
          </span>
        </div>
        <p className='text-[50%] sm:text-[40%] md:text-[50%] lg:text-[30%] xl:text-[22px] z-[1] font-normal'>
          {text.description}
        </p>
      </div>
      <div
        className='text-sm lg:text-[19px] mb-[4%] mt-[4%] cursor-pointer'
        id='container'
        onClick={() => slideTo(1)}
      >
        <button className='learn-more'>
          <span className='circle' aria-hidden='true'>
            <span className='icon arrow'></span>
          </span>
          <span className='button-text'>{text.knowMore}</span>
        </button>
      </div>
    </div>
  );
};

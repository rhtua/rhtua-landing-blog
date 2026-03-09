'use client';
import { homeText } from '@/landing/translation';
import { GitIcon, InIcon, BskIcon, CvIcon } from '../icons';

export const Social: React.FC = () => {
  const resumeLink = homeText.resume;
  return (
    <div className='w-full flex items-center justify-center gap-[1rem] lg:gap-[.5rem] flex-row lg:flex-col h-full'>
      <button
        className='w-[6%] lg:w-[60%] xl:w-[45%] text-landing-text-dark hover:text-landing-accent cursor-pointer transition-colors duration-200'
        onClick={() => window.open('https://github.com/rhtua', '_blank')}
      >
        <GitIcon />
      </button>

      <button
        className='w-[6%] lg:w-[60%] xl:w-[45%] text-landing-text-dark hover:text-landing-accent cursor-pointer transition-colors duration-200'
        onClick={() =>
          window.open('https://www.linkedin.com/in/rhtua/', '_blank')
        }
      >
        <InIcon />
      </button>

      <button
        className='w-[6%] lg:w-[60%] xl:w-[45%] text-landing-text-dark hover:text-landing-accent cursor-pointer transition-colors duration-200'
        onClick={() =>
          window.open('https://bsky.app/profile/rhtua.com.br', '_blank')
        }
      >
        <BskIcon />
      </button>

      <button
        className='w-[6%] lg:w-[60%] xl:w-[45%] text-landing-text-dark hover:text-landing-accent cursor-pointer transition-colors duration-200'
        onClick={() => window.open(resumeLink, '_blank')}
      >
        <CvIcon />
      </button>
    </div>
  );
};

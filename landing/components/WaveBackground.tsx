'use client';

export const WaveBackground: React.FC = () => {
  return (
    <svg
      className='landing-wave-svg'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 900'
      preserveAspectRatio='xMidYMid slice'
    >
      <defs>
        <linearGradient id='waveGrad' x1='0%' y1='30%' x2='100%' y2='70%'>
          <stop offset='0%' stopColor='#F04A00' stopOpacity='0.1' />
          <stop offset='35%' stopColor='#F04A00' stopOpacity='0.7' />
          <stop offset='65%' stopColor='#F04A00' stopOpacity='0.5' />
          <stop offset='100%' stopColor='#F04A00' stopOpacity='0.3' />
        </linearGradient>
      </defs>
      <g fill='none' stroke='url(#waveGrad)'>
        <path
          className='wave wave-1'
          strokeWidth='2.5'
          d='M-200,150 C0,90 250,280 500,200 C750,120 850,310 1100,250 C1350,190 1500,270 1700,220'
        />
        <path
          className='wave wave-2'
          strokeWidth='1.8'
          d='M-150,250 C50,320 200,180 480,260 C760,340 900,200 1150,290 C1400,380 1550,260 1700,310'
        />
        <path
          className='wave wave-3'
          strokeWidth='3'
          d='M-100,370 C150,280 350,420 650,360 C950,300 1050,450 1300,380 C1450,340 1600,400 1700,370'
        />
        <path
          className='wave wave-4'
          strokeWidth='1.5'
          d='M-250,460 C100,520 300,390 550,460 C800,530 1000,400 1200,480 C1380,550 1550,440 1700,490'
        />
        <path
          className='wave wave-5'
          strokeWidth='2.8'
          d='M-100,570 C200,490 400,610 700,540 C1000,470 1100,620 1350,550 C1480,510 1600,580 1700,560'
        />
        <path
          className='wave wave-6'
          strokeWidth='2'
          d='M-200,660 C0,720 250,600 500,680 C750,760 950,640 1200,720 C1400,780 1550,680 1700,710'
        />
        <path
          className='wave wave-7'
          strokeWidth='1.6'
          d='M-150,760 C100,700 350,800 600,740 C850,680 1050,790 1300,730 C1450,700 1600,770 1700,750'
        />
        <path
          className='wave wave-8'
          strokeWidth='2.2'
          d='M-100,840 C180,880 380,790 630,850 C880,910 1080,810 1280,860 C1430,890 1580,830 1700,850'
        />
      </g>
    </svg>
  );
};

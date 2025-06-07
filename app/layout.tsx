import React from 'react';
import { Metadata } from 'next';
import {
  Montserrat as FontSans,
  Lato,
  Nunito,
  Montserrat,
} from 'next/font/google';
import { cn } from '@/lib/utils';
import { VideoDialogProvider } from '@/components/ui/VideoDialogContext';
import VideoDialog from '@/components/ui/VideoDialog';
import 'swiper/css';
import 'swiper/css/navigation';
import '@/styles.css';
import { TailwindIndicator } from '@/components/ui/breakpoint-indicator';
import { BasePage } from '@/landing/components';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Arthur Fusieger',
  description: 'Apresentação e Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={cn(
        fontSans.variable,
        nunito.variable,
        lato.variable,
        montserrat.variable
      )}
    >
      <body className='min-h-screen bg-background font-montserrat antialiased'>
        <VideoDialogProvider>
          {children}
          <VideoDialog />
        </VideoDialogProvider>
        <TailwindIndicator />
      </body>
    </html>
  );
}

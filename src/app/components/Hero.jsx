"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div id='home' className='container mx-auto px-4 md:px-12 py-4 mt-28'>
            <div className='flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12'>
                <div className='flex-1 text-center md:text-left'>
                    <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl'>
                        <span className='font-extrabold'>Hi, I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>Yash Khanter</span></span>
                        <p className='text-2xl font-bold md:text-5xl md:font-semibold py-3 md:py-6 text-transparent bg-clip-text bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>
                        <span>I am </span>
                        <TypeAnimation
                            sequence={[
                                'an Investment Banker',
                                1000,
                                'a stock investor and trader',
                                1000,
                                'a private capital and markets enthusiast',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                        </p>
                    </h1>
                    <p className='text-[#adb7b3] text-base sm:text-lg lg:text-xl mb-6'>I am currently based in <b>Boston, MA and recently graduated with a Master of Science in Finance from Northeastern University.</b> With robust experience in investment banking and debt capital advisory, corporate development, and stock picking and investing, I have spent countless hours in honing my technical skills and understanding of the financial markets, private markets, and public markets across the globe. I am passionate about having a positive impact on as many businesses and individuals as I can in the realm of finance.</p>
                </div>
                <div className='flex-shrink-0'>
                    <div className='rounded-full p-[4px] bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1] w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]'>
                        <div className='relative rounded-full w-full h-full bg-[#181818] overflow-hidden'>
                            <Image 
                                src='/images/Photo.webp' 
                                alt='hero-image' 
                                fill
                                className='object-cover'
                                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mt-6 md:mt-0 bg-white hover:bg-slate-200 text-white font-semibold bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'>
                    <Link href='https://docs.google.com/document/d/1VZtQIY1TUO5YiXciDyk5j1440NscpXTJ/edit?usp=sharing&ouid=113078072215240214886&rtpof=true&sd=true' target='_blank' rel='noreferrer'>Download Resume</Link>
                </button>
            </div>
        </div>
    )
}

export default Hero;

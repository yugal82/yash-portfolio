"use client";
import Image from 'next/image';
import React, { useState } from 'react'
import Tabs from './Tabs';
import Skills from './Skills';
import Certifications from './Certifications';
import Education from './Education';

const About = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const getSelectedTabIndex = (index) => setTabIndex(index)

    return (
        <div id='about' className='container mx-auto px-12 py-4 mt-6 md:mt-24'>
            <div className='lg:flex items-start justify-center gap-8 py-8 px-4'>
                <Image src='/images/about-image.webp' width={500} height={500} alt='about-me' className='rounded-2xl w-full my-auto' />
                <div className='mt-4 md:mt-0'>
                    <h2 className='text-white text-4xl font-bold mb-2'>About Me</h2>
                    <p className='text-base text-justify md:text-lg text-[#adb7b3]'>
                        I personally am driven by the purpose of having a profound impact on small and medium-scale businesses and assisting them in their most important financial transactions, and achieving what they truly deserve. I am very fortunate to have been raised in a very entrepreneurial household that shaped my upbringing, filled with learnings about business, finance, and investments. And this has played an imperative role as I navigated my academic and professional callings. Additionally, it also instilled in me the appreciation for work ethic, persistence, consistency, and integrity. 
                        <br></br>
                        <br></br>
                        Over the years, I have built a robust foundation in investment banking, investment analysis, and corporate development through various professional and academic undertakings. It also helped me acquire hands-on experience of the core finance skills like financial modeling, financial statement analysis, 3 statement modeling, valuation analysis, portfolio management, investment analysis, etc., that are all valuable in today’s rapidly changing and dynamic finance industry.
                        <br></br>
                        <br></br>
                        Growing up, I also indulged myself in sports, which in high school and in college became a competitive pursuit. I was the captain of the school and college soccer teams and enjoyed thriving in a highly competitive environment. Similarly, I strive greatly in a competitive and fast-paced professional setting where challenges help me in outgrowing myself. Whether it’s cranking numbers on a spreadsheet or putting on the qualitative lens, I enjoy both if it results in positive and meaningful contributions within the business landscape.

                    </p>
                </div>
            </div>
            <Tabs categories={['Skills', 'Certifications', 'Education']} getSelectedTabIndex={getSelectedTabIndex} />
            {
                tabIndex === 0 ? (
                    <Skills />
                ) : tabIndex === 1 ? (
                    <Certifications />
                ) : (
                    <Education />
                )
            }
        </div>
    )
}

export default About;

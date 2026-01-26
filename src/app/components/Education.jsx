import React from 'react'

const Education = () => {
    return (
        <>
        <div className='w-full md:flex items-center justify-between'>
            <div>
                <h2 className='text-xl md:text-3xl font-bold'>Master&apos;s of Science</h2>
                <span className='text-base md:text-lg text-[#adb7b3] font-semibold'>Finance | Minor in Quantitative Finance</span>
                <p className='text-base text-[#adb7b3] font-semibold'>Northeastern University, Boston</p>
                <ul className='list-disc list-inside'>
                    <li className='text-base text-[#adb7b3] italic font-semibold'>Relevant Courses: M&A, Investment Banking, Valuation & Value Creation, Investment Analysis, Corporate Finance</li>
                    <li className='text-base text-[#adb7b3] italic font-semibold'>Clubs & Societies: Northeastern Finance & Investment Club, 360 Huntington Fund, Intramural Soccer</li>
                    <li className='text-base text-[#adb7b3] italic font-semibold'>Teaching Assistant under Prof. Faleye for the Financial Management (FINA2201) course managing 150+ students</li>
                </ul>
            </div>
            <div className=' text-[#adb7b3] font-normal md:font-semibold'>
                <span className='block'>Sep 2024 - Dec 2025</span>
                <span className='block w-full md:text-right'>GPA: 3.7/4</span>
            </div>
        </div>
        <div className='w-full md:flex items-center justify-between my-4'>
            <div>
                <h2 className='text-xl md:text-3xl font-bold'>Bachelor&apos;s of Business Administration</h2>
                <span className='text-base md:text-lg text-[#adb7b3] font-semibold'>International Business & Finance</span>
                <p className='text-base text-[#adb7b3] font-semibold'>Savitribai Phule Pune University</p>
            </div>
            <div className=' text-[#adb7b3] font-normal md:font-semibold'>
                <span className='block'>Aug 2020 - Apr 2023</span>
                <span className='block w-full md:text-right'>GPA: 3.6/4</span>
            </div>
        </div>
        </>
    )
}

export default Education;

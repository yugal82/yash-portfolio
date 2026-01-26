import Image from 'next/image';
import React from 'react'

const certificates = [
    {
        name: 'The Complete Financial Analyst Course 2023',
        image: '/images/certificates/The Complete Financial Analyst Course 2023.webp',
        link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-80179262-0622-4a52-a8b7-d6fbed2d9c84.pdf'
    },
    {
        name: 'Microsoft Excel - Excel from Beginner to Advanced',
        image: '/images/certificates/Microsoft Excel - Excel from Beginner to Advanced.webp',
        link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-25d116ec-6a03-4b30-b45f-2a08fb84c681.pdf'
    },
    {
        name: 'Investment Banking - Financial Analysis & Valuation',
        image: '/images/certificates/Investment Banking -  Financial Analysis & Valuation.webp',
        link: 'https://www.coursera.org/account/accomplishments/certificate/VEABCQ5KL6VS'
    },
    {
        name: 'Introduction to Spreadsheets & Models',
        image: '/images/certificates/Introduction to Spreadsheets & Models.webp',
        link: 'https://www.coursera.org/account/accomplishments/certificate/DFAGQVMA34F2'
    },
    {
        name: 'Introduction to Python',
        image: '/images/certificates/Introduction to Python.webp',
        link: 'https://www.datacamp.com/statement-of-accomplishment/course/9e8182a24df7cebae81b97f14a783bf67e564b4a?raw=1'
    },
    {
        name: 'Intermediate Python',
        image: '/images/certificates/Intermediate Python.webp',
        link: 'https://www.datacamp.com/statement-of-accomplishment/course/ce93ba84d475d8bede58fb2f7c5bd2019a1eceed?raw=1'
    },
    {
        name: 'Fundamentals of Quantitative Modeling',
        image: '/images/certificates/Fundamentals of Quantitative Modeling.webp',
        link: 'https://www.coursera.org/account/accomplishments/certificate/6LY8JDSRGRPB'
    },
    {
        name: 'Financial Modeling & Fundamental Analysis',
        image: '/images/certificates/Financial Modeling & Fundamental Analysis.webp',
        link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-65eed9a2-f1de-4fff-87b8-bfdb301f0315.pdf'
    },
    {
        name: 'Financial Markets',
        image: '/images/certificates/Financial Markets.webp',
        link: 'https://www.coursera.org/account/accomplishments/certificate/XES5XNMYT9FJ'
    },
    {
        name: 'Financial Acumen for Non-Financial Managers',
        image: '/images/certificates/Financial Acumen for Non-Financial Managers.webp',
        link: 'https://www.coursera.org/account/accomplishments/certificate/3MP8FMHNQQRK'
    },
    {
        name: 'Finance of M&A - Valuation & Pricing',
        image: '/images/certificates/Finance of M&A - Valuation & Pricing.webp',
        link: 'https://www.coursera.org/account/accomplishments/certificate/89RG3H8ADDXK'
    },
    {
        name: 'Finance of M&A - Designing M&A Deal',
        image: '/images/certificates/Finance of M&A - Designing M&A Deal.webp',
        link: 'https://www.coursera.org/account/accomplishments/certificate/8UC62FNQP5JB'
    },
]

// bg-gradient-to-r from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]
const Certifications = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
                certificates.map((certificate, index) => (
                    <a key={index} href={certificate?.link} target='_blank' rel='noreferrer' className='cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out bg-[#282828] hover:bg-[#383838]  rounded-xl'>
                        <div className='p-2'>
                            <Image className='w-full max-h-48 rounded-xl' src={certificate?.image} width={400} height={0} alt={certificate?.name} />
                            <p className='my-2 pl-2 text-base font-semibold'>{certificate?.name}</p>
                        </div>
                    </a>
                ))
            }
        </div>
    )
}

export default Certifications;

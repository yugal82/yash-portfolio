"use client";
import React from 'react'
import ExperienceCard from './ExperienceCard';

// Sorted in chronological order (most recent first)
const experiences = [
    {
        id: 0,
        role: "Sector Manager",
        company: "360 Huntington Fund (Student led and managed university investment fund)",
        location: "Boston, MA",
        date: "May 2025 - Dec 2025",
        desc: "As Sector Manager at 360 Huntington Fund, I led a team of 18 analysts through comprehensive equity research across Information Technology and Healthcare sectors, generating 9 buy recommendations that achieved a 60% investment committee approval rate. Under my oversight, the $2M+ student-run portfolio consistently outperformed the Russell 3000 by approximately 6% through disciplined sector analysis and rigorous evaluation of market trends.",
        points: [
            "Managed a $2M+ student-run investment fund that consistently generated an alpha of ~6% over the Russell 3000 (RUA)",
            "Monitored market trends and various developments across industries like Information Technology and Healthcare",
            "Led 18 analysts through equity research process, delivering 9 buy investment recommendations with 60% IC approval rate",
        ],
    },
    {
        id: 1,
        role: "Corporate Development Intern",
        company: "NeuroSync, Inc. (Health-tech startup solving neurodegenerative disorder problems)",
        location: "Boston, MA",
        date: "May 2025 - Aug 2025",
        desc: "Collaborated with the Finance & Corporate Development team in the process of raising a $7.5 mn series A/B funding round. Additionally, screened and sourced potential M&A targets for acquisition and corporate development, carried out valuation analysis, and supported internal strategic-decision making.",
        points: [
            "Oversaw financial due diligence and valuation analysis on 2 med-tech acquisition targets that supported strategic decision-making and corporate development",
            "Sourced 50+ potential acquisition targets using sources like PitchBook and Crunchbase, advancing 8 for executive review",
            "Built a pipeline of 1,000+ VC/PE investors, coordinated and attended 25+ meetings for Series B fundraise totaling $7.5M",
            "Maintained investor data room with 100+ documents, enabling smooth due diligence process for 12 institutional investors",
            "Co-developed an AI automation workflow for target sourcing, reducing execution time by 50% and costs by $70K annually",
        ]
    },
    {
        id: 2,
        role: "Sr. Investment Analyst",
        company: "360 Huntington Fund (Student led and managed university investment fund)",
        location: "Boston, MA",
        date: "Sep 2024 - May 2025",
        desc: "As a Senior Investment Analyst at 360 Huntington Fund, I delivered detailed equity research reports on 4 companies across multiple sectors, with 2 achieving unanimous buy votes from the investment committee. I built comprehensive 3-statement financial models, DCF analyses, and comparable company valuations using Bloomberg, FactSet, and Pitchbook to drive investment decisions and produce high-quality research deliverables.",
        points: [
            "Presented detailed equity research report of 4 companies across sectors, 2 of which received 100% buy votes from the IC",
            "Prepared 3-statement models, DCF, Comparable Comps, etc., that drove valuation analyses and investment decisions",
            "Utilized software like Bloomberg, FactSet, and Pitchbook to facilitate high-quality equity research and valuation reports",
        ],
    },
    {
        id: 3,
        role: "Investment Banking Analyst",
        company: "Prachay Capital Limited (An investment bank focused on real estate DCM and financing advisory)",
        location: "Pune, India",
        date: "Sep 2023 - Aug 2024",
        desc: "Worked on multiple private credit and debt advisory transactions/deals, complemented by end-to-end due diligence processes, and managed client relations. Additionally, led industry-wide research across multiple industries. Participated in other due-diligence, valuation & operational analysis, and fund-raising efforts.",
        points: [
            "Executed credit analysis and due diligence processes resulting in closure of 6 real estate debt transactions totaling $35M",
            "Conducted comps analysis of the top 100 financial institutions, resulting in a comprehensive evaluation of PCL's 15+ performance and valuation metrics",
            "Performed due diligence on 30+ private investors and created pitch deck supporting $3M in capital raises across 20+ clients",
            "Researched 3 industries in depth and produced reports that facilitated the development and launch of 2 new debt products",
        ]
    },
    {
        id: 4,
        role: "Finance Summer Intern",
        company: "Prachay Capital Limited (An investment bank focused on real estate DCM and financing advisory)",
        location: "Pune, India",
        date: "Apr 2023 - Jul 2023",
        desc: "Conducted research and developed financial models to track KPIs of ~100 companies in the Financial sector for internal evaluation. Created CIMs and pitch decks for the investment committee and investors, presenting key data and potential investment opportunities.",
        points: [
            "Directed market research on private debt opportunities across 3 industries, contributing to 16% growth in capital raising",
            "Constructed financial models tracking 15+ KPIs that supported in producing credit and investor decks for annual reporting",
            "Created marketing materials supporting $10M+ in non-convertible bond placements across HNI investors",
        ]
    },
];

const Experience = () => {
    return (
        <div id="experience" className='container mx-auto px-4 md:px-12 mt-12 md:mt-24'>
            <h2 className='text-white text-4xl font-bold text-center mb-12'>Experience</h2>
            
            <div className='relative max-w-5xl mx-auto'>
                {/* Vertical Timeline Line */}
                <div className='absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#09A6F3] via-[#0B74EA] to-[#0D41E1]'></div>
                
                {/* Timeline Items */}
                <div className='flex flex-col gap-8'>
                    {experiences.map((experience, index) => (
                        <div key={experience.id} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Timeline Dot */}
                            <div className='absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#09A6F3] border-4 border-[#181818] z-10 shadow-lg shadow-[#09A6F3]/30'></div>
                            
                            {/* Card Container */}
                            <div className={`ml-12 md:ml-0 md:w-[calc(50%-32px)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                <ExperienceCard experience={experience} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience;

import React from 'react'
import ProjectCard from './ProjectCard';

const projectsDetails = [
    {
        name: "Roku's Acquisition by Comcast",
        company: "Roku & Comcast",
        category: "M&A Analysis",
        type: "Academic",
        highlight: "$11 Bn Deal",
        desc: "Proposed and led M&A analysis of Comcast's $11B acquisition of Roku, building complete financial model, DCF valuations, pro-forma financial statements and deal structure—ranked top 3 in cohort of 30+ students.",
        tags: ["DCF", "Financial Modeling", "Pro-forma Statements"],
        link: "https://drive.google.com/drive/folders/17Hl0WAXLmhYTgvZs3hJbE16njRywZIZt?usp=drive_link"
    },
    {
        name: "Tiffany's Acquisition by LVMH",
        company: "Tiffany & LVMH",
        category: "Investment Banking",
        type: "Academic",
        highlight: "Sell-Side Advisory",
        desc: "Representing Tiffany as a sell-side investment banker and advising on the valuation and sale process to LVMH.",
        tags: ["Sell-Side", "Valuation", "Deal Advisory"],
        link: "https://drive.google.com/drive/folders/1YeaJ4zfCRjD8IdgXCcuo_6sIKn-x8iPm?usp=drive_link"
    },
    {
        name: "Microsoft Value Creation",
        company: "Microsoft Inc.",
        category: "Valuation",
        type: "Consulting",
        highlight: "Value Creation",
        desc: "Consultants to the Microsoft Inc. management team in presenting them the value creation opportunities.",
        tags: ["Value Creation", "Strategic Advisory", "Management Consulting"],
        link: "https://drive.google.com/drive/folders/1-oHipFWZO4hI28Y5u_ueVFMVqShxlf8c?usp=drive_link"
    },
    {
        name: "Investment Recommendation",
        company: "Vistra Corp.",
        category: "Equity Research",
        type: "360 Huntington Fund",
        highlight: "Buy Rating",
        desc: "Buy recommendation of Vistra Corp. Prepared an investment thesis backed by strong quantitative financial and valuation model to present the investment idea.",
        tags: ["Equity Research", "Investment Thesis", "Valuation"],
        link: "https://drive.google.com/drive/folders/1huUzX58VSj7JQdGVR_bTNQCDbc-3G_7c?usp=drive_link"
    },
    {
        name: "Investment Recommendation",
        company: "Walmart Inc.",
        category: "Equity Research",
        type: "360 Huntington Fund",
        highlight: "Buy Rating",
        desc: "Buy recommendation of Walmart. Prepared an investment thesis backed by strong quantitative financial and valuation model to present the investment idea.",
        tags: ["Equity Research", "Investment Thesis", "Valuation"],
        link: "https://drive.google.com/drive/folders/1LG8fPdvLvElMfj-BqAmrMfulnKmPoY64?usp=drive_link"
    },
    {
        name: "Investment Recommendation",
        company: "Nice Ltd.",
        category: "Equity Research",
        type: "360 Huntington Fund",
        highlight: "Buy Rating",
        desc: "Buy recommendation of Nice Ltd. Prepared an investment thesis backed by strong quantitative financial and valuation model to present the investment idea.",
        tags: ["Equity Research", "Investment Thesis", "Valuation"],
        link: "https://drive.google.com/drive/folders/1KPGSFGqbXiuZga5ggFN_1flObIXO7EUu?usp=drive_link"
    },
    {
        name: "Stock Valuation Analysis",
        company: "Pattern Group",
        category: "Stock Analysis",
        type: "Personal",
        highlight: "NAS: PTRN",
        desc: "Conducted buy-side equity research analysis of Pattern Group for academic and vocational purposes to drive my personal investing decisions.",
        tags: ["Fundamental Analysis", "Valuation", "Personal Investing"],
        link: "https://drive.google.com/drive/folders/1GD-_B9WvEGg8HSjezXio5ixZI3CnirIi?usp=drive_link"
    },
    {
        name: "Stock Valuation Analysis",
        company: "ITC Limited",
        category: "Stock Analysis",
        type: "Personal",
        highlight: "NSE: ITC",
        desc: "Spent time valuing and analyzing ITC Ltd for academic and vocational basis to drive my personal investing decisions.",
        tags: ["Fundamental Analysis", "Valuation", "Personal Investing"],
        link: "https://drive.google.com/drive/folders/1KXDAMw1a1NCd56soL14ZxOrCEpBDEmqe?usp=drive_link"
    },
    {
        name: "Stock Valuation Analysis",
        company: "Avenue Supermarts Ltd",
        category: "Stock Analysis",
        type: "Personal",
        highlight: "NSE: DMART",
        desc: "Spent time valuing and analyzing Avenue Supermarts Ltd for academic and vocational basis to drive my personal investing decisions.",
        tags: ["Fundamental Analysis", "Valuation", "Personal Investing"],
        link: "https://drive.google.com/drive/folders/1GEv1lx5RBDYY9D2h8psgSHTan0V2FuBR?usp=drive_link"
    },
]

const Projects = () => {
    return (
        <div id='projects' className='container mx-auto px-4 md:px-12 py-4 mt-12 md:mt-24'>
            <div>
                <h2 className='text-white text-center text-4xl font-bold mb-10'>Projects</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    projectsDetails?.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;

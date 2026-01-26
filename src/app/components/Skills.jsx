import React from 'react'

const skills = ['Financial Modeling', 'Financial Statement Analysis', '3-Statement Modeling', 'Valuation Analysis', 'DCF', 'LBO', 'Comparable Comps', 'M&A Analysis', 'Portfolio Management', 'Risk Analysis & Management', 'Fund Raising', 'Due Diligence', 'VDR Management']
const softwareSkills = ['Bloomberg', 'FactSet', 'Pitchbook', 'Crunchbase', 'CRM', 'MS Excel', 'MS PowerPoint', 'MS Words']

const SkillBadge = ({ skill }) => {
    return (
        <span className='px-4 py-2 bg-[#181818] text-[#adb7b3] text-sm font-medium rounded-full border border-[#0B74EA]/30 hover:border-[#09A6F3] hover:text-white hover:bg-gradient-to-r hover:from-[#09A6F3]/10 hover:to-[#0D41E1]/10 transition-all duration-300 ease-in-out cursor-default'>
            {skill}
        </span>
    )
}

const Skills = () => {
    return (
        <div className='space-y-8'>
            <div>
                <h3 className='text-lg font-semibold text-white mb-4'>Core Skills</h3>
                <div className='flex flex-wrap gap-3'>
                    {skills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                    ))}
                </div>
            </div>
            <div>
                <h3 className='text-lg font-semibold text-white mb-4'>Software & Tools</h3>
                <div className='flex flex-wrap gap-3'>
                    {softwareSkills.map((skill) => (
                        <SkillBadge key={skill} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;
import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div className='group bg-[#181818] rounded-xl border border-[#306EE8]/30 hover:border-[#09A6F3] transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#09A6F3]/10 overflow-hidden h-full flex flex-col'>
            {/* Header with gradient accent */}
            <div className='relative px-5 pt-5 pb-4'>
                {/* Category badge */}
                <div className='flex items-center justify-between mb-3'>
                    <span className='text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-[#09A6F3]/20 to-[#0D41E1]/20 text-[#09A6F3] border border-[#09A6F3]/30'>
                        {project?.category}
                    </span>
                    <span className='text-xs font-medium text-[#adb7b3] bg-[#282828] px-2 py-1 rounded'>
                        {project?.type}
                    </span>
                </div>
                
                {/* Company name */}
                <h3 className='text-xl font-bold text-white mb-1 group-hover:text-[#09A6F3] transition-colors duration-300'>
                    {project?.company}
                </h3>
                
                {/* Project name */}
                <p className='text-sm text-[#adb7b3] font-medium'>
                    {project?.name}
                </p>
                
                {/* Highlight badge */}
                {project?.highlight && (
                    <div className='mt-3 inline-flex items-center gap-2'>
                        <span className='w-2 h-2 rounded-full bg-[#09A6F3] animate-pulse'></span>
                        <span className='text-sm font-semibold text-white'>
                            {project?.highlight}
                        </span>
                    </div>
                )}
            </div>
            
            {/* Divider */}
            <div className='mx-5 h-px bg-gradient-to-r from-transparent via-[#306EE8]/50 to-transparent'></div>
            
            {/* Description */}
            <div className='px-5 py-4 flex-grow'>
                <p className='text-sm text-[#adb7b3] leading-relaxed'>
                    {project?.desc}
                </p>
            </div>
            
            {/* Tags */}
            {project?.tags && project.tags.length > 0 && (
                <div className='px-5 pb-5'>
                    <div className='flex flex-wrap gap-2'>
                        {project.tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className='text-xs px-2 py-1 rounded bg-[#282828] text-[#adb7b3] border border-[#383838] hover:border-[#09A6F3]/50 hover:text-white transition-colors duration-200'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectCard;
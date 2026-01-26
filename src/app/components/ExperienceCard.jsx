import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 100%;
    border-radius: 12px;
    padding: 18px 24px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.3s ease-in-out;
    background: #181818;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 14px 16px;
        gap: 12px;
    }
    border: 1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #adb7b3;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const MetaInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 2px;
`

const Location = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #09A6F3;
    display: flex;
    align-items: center;
    gap: 4px;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #adb7b3;
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Divider = styled.span`
    color: #adb7b3;
    font-size: 12px;
`

const PointsList = styled.ul`
    width: 100%;
    padding-left: 8px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
`

const Point = styled.li`
    font-size: 13px;
    font-weight: 400;
    color: #adb7b3;
    line-height: 1.6;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    &::before {
        content: '';
        min-width: 6px;
        height: 6px;
        background: #09A6F3;
        border-radius: 50%;
        margin-top: 7px;
    }
    @media only screen and (max-width: 768px){
        font-size: 12px;
        gap: 10px;
        &::before {
            min-width: 5px;
            height: 5px;
            margin-top: 6px;
        }
    }
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <MetaInfo>
                    <Location>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        {experience.location}
                    </Location>
                    <Divider>•</Divider>
                    <Date>{experience.date}</Date>
                </MetaInfo>
            </Top>
            {experience?.points && experience.points.length > 0 && (
                <PointsList>
                    {experience.points.map((point, index) => (
                        <Point key={index}>{point}</Point>
                    ))}
                </PointsList>
            )}
        </Card>
    )
}

export default ExperienceCard
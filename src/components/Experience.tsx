
import React from 'react'

type DetailsProps = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    address: string;
    work: string;
}

const Details = ({position, company, companyLink, time, address, work}: DetailsProps) => {
    return (
      <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]
      '>
        <div>
          <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
            {position}&nbsp; <a href={companyLink} target={"_blank"} className='text-orange-500 capitalize'>@{company}</a>
          </h3>
          <span className='capitalize font-medium text-dark/75 xs:text-sm'>
            {time} | {address}
          </span>
          <p className='font-medium w-full md:text-sm'>{work}</p>
        </div>
      </li>
    );
    }

const Experience = () => {
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>
        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details company='PresGroup' companyLink='https://presgroup.com/' position='Software Developer' time='2022 - Present' address='Remote' work='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'/>
            </ul>
        </div>
    </div>
  )
}

export default Experience
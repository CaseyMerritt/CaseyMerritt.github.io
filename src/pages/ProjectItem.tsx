import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router';

type ProjectTypes = {
    title:string;
    backgroundImg:string;
    projectUrl:string;
    description:string;
}

const ProjectItem: React.FunctionComponent<ProjectTypes> = (props) =>{
    const {title, backgroundImg, projectUrl, description} = props;

    return(
        <div className='relative fill flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-teal-500 to-cyan-500'>
            <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} width={500} height={500} alt=''/>
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
                <p className='pb-4 pt-2 text-white text-center'>{description}</p>
                <a href={projectUrl}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                </a>
            </div>
        </div>
    )
}

export default ProjectItem

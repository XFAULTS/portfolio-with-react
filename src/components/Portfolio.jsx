import React from 'react'
import pro1 from '../assets/portfolio/project2.png'
import pro2 from '../assets/portfolio/project1.png'


function Portfolio() {
    const profolios = [
        {
            id:1,
            src: pro1,
            href:'https://xfaults.github.io/portfolio/'
        },
        {
            id:2,
            src: pro2,
            href: 'https://xfaults.github.io/SCROLL/'
        },

    ]



  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Some of my Work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {profolios.map(({id,src,href}) => (
                
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg  '>
                    <img src={src} alt="" className='rounded-md hover:scale-105 duration-200 ' />
                <div className='flex items-center justify-center '>
                        {/* <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button> */}
                        <a href={href}>  
                        <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
                        </a>
                </div>
                </div>
            
            ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
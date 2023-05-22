import React from 'react'

function About() {
  return (
    <div name="about" className='w-full bg-gradient-to-b 
    from-gray-800 to-black text-white '>
        <div className='max-w-screen-lg p-4 mx-auto felx flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20 '>
                I'm Rachit, a passionate explorer of the world 
                of computers. My journey began when I was around 
                12-13 years old, and since then, I have been fascinated
                by the endless possibilities that computers offer. It 
                all started with my introduction to the programming 
                language C, and I quickly found myself excelling in
                it.As the years went by, I expanded my horizons and
                delved into Python, which opened up a whole new 
                world of opportunities for me. With Python, I 
                explored the realms of Data Structures and Algorithms,
                honing my skills along the way.</p>

                <br />
            <p className='text-xl'>In the 9th grade, I embarked on my web development journey,
                    starting with frontend development. It was an exciting time for me
                    as I learned the intricacies of creating captivating user
                    interfaces and crafting immersive web experiences.Throughout my college 
                    years, my passion for backend development took flight. I dived into JavaScript 
                    and embraced various backend technologies such as Node.js and Django.
                    Additionally, I ventured into the world of databases, mastering CRED 
                    (Create, Read, Update, Delete) operations with MongoDB and MySQL.</p>
        </div>
    </div>
  )
}

export default About
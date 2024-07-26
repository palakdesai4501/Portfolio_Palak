import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];

  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

        <div className='relative w-full flex overflow-x-scroll space-y-5 overflow-hidden snap-x snap-mandatory z-20 mt-52'>
           {projects.map((project, i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col   items-center justify-center p-20 md:p-44 h-screen '>
                <img src="/yt.png" alt="youtube-clone" className='xl: size-96' />

                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-2xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/50'>
                            Case Study {i + 1} of {projects.length}:
                        </span>{" "}
                        UPS Clone
                    </h4>

                    <p className='text-lg text-center md:text-left'>
                        A web application that models the aspects of a healthy and fit life. To increase the value of the app, real-time exercise data retrieval from
                        the Rapid API was implemented, guaranteeing users have access to a variety of current and varied workout routines. Utilized react.js
                        JavaScript library and material UI framework to build the web application.
                    </p>
                </div>
            </div>
           ))} 

        </div>

        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </div>
  );
}

export default Projects
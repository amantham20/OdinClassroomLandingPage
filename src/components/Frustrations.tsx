import React from 'react'

import ErrorWindow from './ErrorWindow'

const Frustrations = () => {
  return (
    <div className='h-screen flex justify-center items-center relative overflow-x-hidden'>
      <h3 className='flex text-3xl text-white'> Escape Frustration, Embrace Learning. </h3>

      <div className='absolute top-32 left-16'>
        <ErrorWindow error='"setting up project is a pain in codio"' person='aman' />
      </div>

      <div className='absolute top-16 right-16'>
        <ErrorWindow error='“Kicked out all of the students during an Exam”' person='CSE TA' />
      </div>

      <div className='absolute bottom-16 left-16'>
        <ErrorWindow error='“We ran into many issues with course management”' person='CSE Professor' />
      </div>

      <div className='absolute top-72 -right-[1rem]'>
        <ErrorWindow error='“The check answer button often does not work”' person='CSE Student'/>
      </div>

      <div className='absolute bottom-32 right-16'>
        <ErrorWindow error='“The check answer button often does not work”' person='CSE Student'/>
      </div>
    </div>
  )
}

export default Frustrations
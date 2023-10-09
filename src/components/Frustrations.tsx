import React from 'react'

import ErrorWindow from './ErrorWindow'

const Frustrations = () => {
  return (

    <>
      <div className='hidden h-screen lg:flex justify-center items-center relative overflow-x-hidden'>


        <div className='absolute top-32 left-16'>
          <ErrorWindow error='"setting up project is a pain in codio"' person='CSE Professor' />
        </div>

        <div className='absolute top-16 right-16'>
          <ErrorWindow error='“Kicked out all of the students during an Exam”' person='CSE TA' />
        </div>

        <div className='absolute top-[32rem] left-16'>
          <ErrorWindow error='“We ran into many issues with course management”' person='CSE Professor' />
        </div>

        <div className='absolute top-72 -left-[1rem]'>
          <ErrorWindow error='“It has a terrible grading interface”' person='CSE TA' />
        </div>



        <div className='absolute top-72 -right-[1rem]'>
          <ErrorWindow error='“The check answer button often does not work”' person='CSE Student' />
        </div>

        <div className='absolute top-[28rem] right-16'>
          <ErrorWindow error='“It has performance issues in classes with a large number of students”' person='CSE TA' />
        </div>

        {/* <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <ErrorWindow error='Escape Frustration, Embrace Learning.' />
      </div> */}

        <div className=' absolute backdrop-blur-lg rounded-full px-5 py-5 border border-solid border-white'>
          <h3 className='flex text-3xl text-white '> # Escape Frustration, Embrace Learning. </h3>
        </div>
      </div>

      <div className='lg:hidden flex flex-col items-center mt-16'>
      <div className='backdrop-blur-lg rounded-full mt-5 text-center'>
          <h3 className='text-xl text-white'># Escape Frustration, Embrace Learning.</h3>
        </div>
        <ErrorWindow error='"setting up project is a pain in codio"' person='CSE Professor' />
        <ErrorWindow error='“Kicked out all of the students during an Exam”' person='CSE TA' />
        <ErrorWindow error='“We ran into many issues with course management”' person='CSE Professor' />
        <ErrorWindow error='“It has a terrible grading interface”' person='CSE TA' />
        <ErrorWindow error='“The check answer button often does not work”' person='CSE Student' />
        <ErrorWindow error='“It has performance issues in classes with a large number of students”' person='CSE TA' />

      </div>


    </>
  )
}

export default Frustrations
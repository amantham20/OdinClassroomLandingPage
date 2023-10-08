import React from 'react'

interface ButtonProps {
  name: string
}

const Button:React.FC<ButtonProps> = ({ name }) => {
  return (
    <a
      className='font-normal px-4 py-3 bg-white rounded-lg text-[#134E3A] hover:bg-transparent hover:text-white border border-transparent hover:border-solid hover:border-white  mt-4 transition-all duration-400 ease text-2xl'
      href="https://docs.google.com"
    >
      {name}
    </a>
  )
}

const Hero = () => {
  return (
    <div className='h-screen flex items-center justify-center text-white'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold'>
          The Next Generation Coding Platform <br /> is almost here
        </h1>
        {/* <p className='text-2xl mt-4'>
          Odin Classroom is an integrated coding environment that allows you to <br />
          code, test, and submit your assignments all in one place.
        </p> */}

        <p className='text-4xl mt-10 flex justify-center'> <span className='mt-5 mr-5 text-5xl'>&lt;</span> <Button name='Complete our survey' /> <span className='ml-5 mt-5 text-5xl'> &#47; &gt;</span></p>
      </div>
    </div>
  )
}

export default Hero
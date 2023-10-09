import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className=" p-4">
        <div className="flex justify-center">

          <div className='rounded-full border '>
            <p className='text-white py-2 px-3'>Coming Soon</p>
          </div>
        </div>
        <div className="flex justify-center mt-10 mb-10">
        <p className='text-4xl mt-10 flex justify-center text-white'> <span className=' mr-5 text-5xl'>&lt;</span> Coffee Code Company <span className='ml-5 text-5xl'> &#47; &gt;</span></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer